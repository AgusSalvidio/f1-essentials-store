import { Button, Text, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapPreview from "../../components/MapPreview/MapPreview";
import { usePostLocationMutation } from "../../services/shopServices";
import { useSelector } from "react-redux";
import { styles } from "./LocationSelector.styles";
import { configurationProvider } from "../../config/configurationProvider";

const { mapApiKey } = configurationProvider;

const LocationSelector = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [loadingAddress, setLoadingAddress] = useState(false);

  const [triggerPostUserLocation, result] = usePostLocationMutation();
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

  const onConfirmAddress = () => {
    if (!location || !address) {
      setError("Ubicación o dirección inválida.");
      return;
    }
    const date = new Date();
    triggerPostUserLocation({
      location: {
        latitude: location.latitude,
        longitude: location.longitude,
        address,
        updateAt: `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`,
      },
      localId,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mi dirección</Text>

      {loadingLocation ? (
        <ActivityIndicator size="large" color="gray" />
      ) : error ? (
        <View style={styles.noLocationContainer}>
          <Text>{error}</Text>
        </View>
      ) : location ? (
        <>
          <Text style={styles.text}>
            Lat: {location.latitude.toFixed(5)}, Long:{" "}
            {location.longitude.toFixed(5)}
          </Text>
          <MapPreview location={location} />
          {loadingAddress ? (
            <ActivityIndicator size="small" color="gray" />
          ) : (
            <Text style={styles.address}>Dirección: {address}</Text>
          )}
          <Button
            color="red"
            onPress={onConfirmAddress}
            title="Confirmar ubicación"
          />
        </>
      ) : (
        <View style={styles.noLocationContainer}>
          <Text>No se encontró ubicación.</Text>
        </View>
      )}
    </View>
  );
};

export default LocationSelector;
