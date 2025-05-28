import { Button, Image, View, Text, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../../services/shopServices";
import { styles } from "./Profile.styles";
import { useSession } from "../../hooks/useSession";
import { clearUser } from "../../features/User/userSlice";
import { useState, useCallback } from "react";

const defaultImage = require("../../../assets/images/defaultProfile.png");

const Profile = ({ navigation }) => {
  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: imageFromBase, isLoading: isLoadingImage } =
    useGetProfileImageQuery(localId);
  const { truncateSessionTable } = useSession();
  const dispatch = useDispatch();

  const [signingOut, setSigningOut] = useState(false);
  const [signOutError, setSignOutError] = useState("");

  const launchCamera = useCallback(() => {
    navigation.navigate("ImageSelectorScreen");
  }, [navigation]);

  const launchLocation = useCallback(() => {
    navigation.navigate("ListAddressScreen");
  }, [navigation]);

  const signOut = useCallback(async () => {
    setSigningOut(true);
    setSignOutError("");
    try {
      await truncateSessionTable();
      dispatch(clearUser());
    } catch (err) {
      setSignOutError("Error al cerrar sesión. Intenta nuevamente.");
    } finally {
      setSigningOut(false);
    }
  }, [dispatch, truncateSessionTable]);

  return (
    <View style={styles.container}>
      {isLoadingImage ? (
        <ActivityIndicator size="large" color="gray" />
      ) : (
        <Image
          source={{ uri: imageFromBase?.image || imageCamera } || defaultImage}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      <Button
        color="red"
        title="Agregar foto de perfil"
        onPress={launchCamera}
      />
      <Button color="red" title="Mi dirección" onPress={launchLocation} />

      {signingOut ? (
        <ActivityIndicator size="small" color="red" />
      ) : (
        <Button color="red" title="Cerrar Sesión" onPress={signOut} />
      )}

      {signOutError ? (
        <Text style={styles.errorText}>{signOutError}</Text>
      ) : null}
    </View>
  );
};

export default Profile;
