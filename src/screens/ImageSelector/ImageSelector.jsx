import {
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/User/userSlice";
import { usePostProfileImageMutation } from "../../services/shopServices";
import { styles } from "./ImageSelector.styles";
import { showAlert } from "../../utils/alerts";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [triggerPostImage] = usePostProfileImageMutation();
  const { localId } = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    return granted;
  };

  const pickImageFromCamera = async () => {
    try {
      const permission = await verifyCameraPermissions();
      if (!permission) {
        showAlert("Permiso denegado", "Se requiere acceso a la cámara.");
        return;
      }
      const result = await ImagePicker.launchCameraAsync({
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
      showAlert("Error", "No se pudo tomar la foto.");
    }
  };

  const pickImageFromGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
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
      showAlert("Error", "No se pudo seleccionar la foto.");
    }
  };

  const confirmImage = async () => {
    if (!image) return;
    try {
      setLoading(true);
      dispatch(setCameraImage(image));
      await triggerPostImage({ image, localId }).unwrap();
      showAlert("Éxito", "Foto de perfil actualizada.");
      navigation.goBack();
    } catch (err) {
      console.log(err);
      showAlert("Error", "No se pudo subir la foto.");
    } finally {
      setLoading(false);
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

      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <TouchableOpacity style={styles.button} onPress={pickImageFromCamera}>
            <Text style={styles.buttonText}>Sacar otra foto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, loading && { opacity: 0.5 }]}
            onPress={confirmImage}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Confirmar foto</Text>
          </TouchableOpacity>
          {loading && <ActivityIndicator size="large" color="red" />}
        </>
      ) : (
        <View style={styles.noPhotoContainer}>
          <Text style={styles.noPhotoText}>No hay foto para mostrar</Text>
          <TouchableOpacity style={styles.button} onPress={pickImageFromCamera}>
            <Text style={styles.buttonText}>Sacar una foto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={pickImageFromGallery}
          >
            <Text style={styles.buttonText}>Elegir de galería</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ImageSelector;
