import { Button, Text, View, Image } from "react-native";
import { useState } from "react";
import * as ImagePiker from "expo-image-picker";

import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/User/userSlice";
import { usePostProfileImageMutation } from "../../services/shopServices";
import { styles } from "./ImageSelector.styles";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [triggerPostImage, result] = usePostProfileImageMutation();
  const { localId } = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePiker.requestCameraPermissionsAsync();
    return granted;
  };

  const pickImage = async () => {
    try {
      const permissionCamera = await verifyCameraPermissions();
      if (permissionCamera) {
        let result = await ImagePiker.launchCameraAsync({
          mediaTypes: ["images"],
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
          quality: 0.2,
        });

        if (!result.canceled) {
          const image = `data:image/jpeg;base64, ${result.assets[0].base64}`;
          setImage(image);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const confirmImage = async () => {
    try {
      dispatch(setCameraImage(image));
      triggerPostImage({ image, localId });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Button color="red" title="Sacar otra foto" onPress={pickImage} />
          <Button color="red" title="Confirmar foto" onPress={confirmImage} />
        </>
      ) : (
        <View style={styles.noPhotoContainer}>
          <Text>No hay foto para mostrar</Text>
          <Button color="red" title="Sacar una foto" onPress={pickImage} />
        </View>
      )}
    </View>
  );
};

export default ImageSelector;
