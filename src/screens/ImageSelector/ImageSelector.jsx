import {
  Button,
  Text,
  View,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/User/userSlice";
import { usePostProfileImageMutation } from "../../services/shopServices";
import { styles } from "./ImageSelector.styles";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [triggerPostImage, result] = usePostProfileImageMutation();
  const { localId } = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    return granted;
  };

  const pickImageFromCamera = async () => {
    try {
      const permissionCamera = await verifyCameraPermissions();
      if (!permissionCamera) {
        Alert.alert(
          "Permiso denegado",
          "Necesitamos acceso a la cámara para tomar fotos."
        );
        return;
      }
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });

      if (!result.canceled) {
        const img = `data:image/jpeg;base64,${result.assets[0].base64}`;
        setImage(img);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Ocurrió un error al tomar la foto.");
    }
  };

  const pickImageFromGallery = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });

      if (!result.canceled) {
        const img = `data:image/jpeg;base64,${result.assets[0].base64}`;
        setImage(img);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Ocurrió un error al seleccionar la foto.");
    }
  };

  const confirmImage = async () => {
    if (!image) return;
    setLoading(true);
    try {
      dispatch(setCameraImage(image));
      const response = await triggerPostImage({ image, localId }).unwrap();
      setLoading(false);
      Alert.alert("Éxito", "Foto subida correctamente.");
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      console.log(error);
      Alert.alert("Error", "No se pudo subir la foto. Intenta nuevamente.");
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={{ marginVertical: 10, width: "80%" }}>
            <Button
              color="red"
              title="Sacar otra foto"
              onPress={pickImageFromCamera}
            />
          </View>
          <View style={{ marginVertical: 10, width: "80%" }}>
            <Button
              color="red"
              title="Confirmar foto"
              onPress={confirmImage}
              disabled={loading}
            />
          </View>
          {loading && <ActivityIndicator size="large" color="red" />}
        </>
      ) : (
        <View style={styles.noPhotoContainer}>
          <Text>No hay foto para mostrar</Text>
          <View style={{ marginVertical: 10, width: "80%" }}>
            <Button
              color="red"
              title="Sacar una foto"
              onPress={pickImageFromCamera}
            />
          </View>
          <View style={{ marginVertical: 10, width: "80%" }}>
            <Button
              color="red"
              title="Elegir de galería"
              onPress={pickImageFromGallery}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default ImageSelector;
