import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapPreview from "../../components/MapPreview/MapPreview";
import { usePostLocationMutation } from "../../services/shopServices";
import { useSelector } from "react-redux";
import { styles } from "./LocationSelector.styles";
import { configurationProvider } from "../../config/configurationProvider";

const { mapApiKey } = configurationProvider;

const LocationSelector = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const [triggerPostUserLocation, result] = usePostLocationMutation();
  const { localId } = useSelector((state) => state.auth.value);

  const onConfirmAddress = () => {
    const date = new Date();
    triggerPostUserLocation({
      location: {
        latitude: location.latitude,
        longitude: location.longitude,
        address: address,
        updateAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      },
      localId: localId,
    });
  };

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
          let location = await Location.getCurrentPositionAsync({});
          console.log(location);
          setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) {
          const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${mapApiKey}`;
          const response = await fetch(url_reverse_geocode);
          const data = await response.json();
          setAddress(data.results[0].formatted_address);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [location]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mi dirección</Text>
      {/* Flatlist con las directions */}
      {location ? (
        <>
          <Text style={styles.text}>
            Lat: {location.latitude}, long: {location.longitude}.
          </Text>
          <MapPreview location={location} />
          <Text style={styles.address}>Dirección formateada {address}</Text>
          <Button
            color="red"
            onPress={onConfirmAddress}
            title="Confirmar ubicación"
          />
        </>
      ) : (
        <>
          <View style={styles.noLocationContainer}>
            <Text>{error}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default LocationSelector;
