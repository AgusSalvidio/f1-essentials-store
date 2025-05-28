import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import Feather from "@expo/vector-icons/Feather";
import MapPreview from "../../components/MapPreview/MapPreview";
import { usePostLocationMutation } from "../../services/shopServices";
import { useSelector } from "react-redux";
import { styles } from "./LocationSelector.styles";
import { configurationProvider } from "../../config/configurationProvider";

const { mapApiKey } = configurationProvider;

const LocationSelector = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [loadingAddress, setLoadingAddress] = useState(false);
  const [posting, setPosting] = useState(false);

  const [triggerPostUserLocation] = usePostLocationMutation();
  const { localId } = useSelector((state) => state.auth.value);

  useEffect(() => {
    const getLocation = async () => {
      setLoadingLocation(true);
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permiso para acceder a la ubicación denegado.");
          setLoadingLocation(false);
          return;
        }
        const loc = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        });
        setError("");
      } catch (err) {
        setError("No se pudo obtener la ubicación. Intenta nuevamente.");
        console.log(err);
      } finally {
        setLoadingLocation(false);
      }
    };
    getLocation();
  }, []);

  useEffect(() => {
    const fetchAddress = async () => {
      if (!location?.latitude || !location?.longitude) return;

      setLoadingAddress(true);
      try {
        const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${mapApiKey}`;
        const response = await fetch(url_reverse_geocode);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setAddress(data.results[0].formatted_address);
          setError("");
        } else {
          setError("No se pudo obtener la dirección.");
        }
      } catch (err) {
        setError("Error al obtener la dirección.");
        console.log(err);
      } finally {
        setLoadingAddress(false);
      }
    };
    fetchAddress();
  }, [location]);

  const onConfirmAddress = async () => {
    if (!location || !address) {
      setError("Ubicación o dirección inválida.");
      return;
    }
    setPosting(true);
    try {
      const date = new Date();
      await triggerPostUserLocation({
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
          address,
          updateAt: `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`,
        },
        localId,
      }).unwrap();
      setError("");
      navigation.goBack();
    } catch (err) {
      setError("No se pudo guardar la ubicación. Intenta nuevamente.");
      console.log(err);
    } finally {
      setPosting(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather name="chevron-left" size={24} color="#333" />
        <Text style={styles.backText}>Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Mi dirección</Text>

      {loadingLocation ? (
        <ActivityIndicator
          size="large"
          color="gray"
          style={{ marginTop: 40 }}
        />
      ) : error ? (
        <View style={styles.noLocationContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : location ? (
        <>
          <Text style={styles.coordinates}>
            Lat: {location.latitude.toFixed(5)}, Long:{" "}
            {location.longitude.toFixed(5)}
          </Text>
          <MapPreview location={location} />
          {loadingAddress ? (
            <ActivityIndicator
              size="small"
              color="gray"
              style={{ marginVertical: 10 }}
            />
          ) : (
            <Text style={styles.address}>Dirección: {address}</Text>
          )}

          <TouchableOpacity
            style={[styles.button, posting && { opacity: 0.6 }]}
            onPress={onConfirmAddress}
            disabled={posting}
          >
            {posting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Confirmar ubicación</Text>
            )}
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.noLocationContainer}>
          <Text style={styles.text}>No se encontró ubicación.</Text>
        </View>
      )}
    </View>
  );
};

export default LocationSelector;
