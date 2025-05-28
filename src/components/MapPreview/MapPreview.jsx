import { Image, Text, View, useWindowDimensions } from "react-native";
import { configurationProvider } from "../../config/configurationProvider";
import { styles } from "./MapPreview.styles";

const { mapApiKey } = configurationProvider;

const MapPreview = ({ location }) => {
  const { width } = useWindowDimensions();
  const size = Math.min(width * 0.8, 300);

  if (
    !location ||
    typeof location.latitude !== "number" ||
    typeof location.longitude !== "number"
  ) {
    return (
      <View style={[styles.mapPreview, { width: size, height: size }]}>
        <Text>No hay ubicación disponible</Text>
      </View>
    );
  }

  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=${size}x${size}&maptype=roadmap&markers=color:red%7Clabel:Me%7C${location.latitude},${location.longitude}&key=${mapApiKey}`;

  return (
    <View style={styles.mapPreview}>
      <Image
        style={{ width: size, height: size, borderRadius: 10 }}
        source={{ uri: mapPreviewUrl }}
        accessibilityLabel="Vista previa del mapa con la ubicación seleccionada"
        onError={() => console.warn("Error cargando la imagen del mapa")}
      />
    </View>
  );
};

export default MapPreview;
