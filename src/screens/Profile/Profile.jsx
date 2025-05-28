import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../../services/shopServices";
import { styles } from "./Profile.styles";
import { useSession } from "../../hooks/useSession";
import { clearUser } from "../../features/User/userSlice";
import { useState, useCallback } from "react";
import Feather from "@expo/vector-icons/Feather";

const defaultImage = require("../../../assets/images/defaultProfile.png");

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { truncateSessionTable } = useSession();
  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: imageFromBase, isLoading: isLoadingImage } =
    useGetProfileImageQuery(localId);

  const [signingOut, setSigningOut] = useState(false);
  const [signOutError, setSignOutError] = useState("");

  const profileImage = imageFromBase?.image || imageCamera || null;

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
      <View style={styles.card}>
        {isLoadingImage ? (
          <ActivityIndicator size="large" color="gray" />
        ) : (
          <Image
            source={profileImage ? { uri: profileImage } : defaultImage}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Text style={styles.title}>Mi Perfil</Text>

        <TouchableOpacity style={styles.button} onPress={launchCamera}>
          <Feather name="camera" size={20} color="#fff" />
          <Text style={styles.buttonText}>Agregar foto de perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={launchLocation}>
          <Feather name="map-pin" size={20} color="#fff" />
          <Text style={styles.buttonText}>Mi dirección</Text>
        </TouchableOpacity>

        {signingOut ? (
          <ActivityIndicator size="small" color="red" />
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.logout]}
            onPress={signOut}
          >
            <Feather name="log-out" size={20} color="#fff" />
            <Text style={styles.buttonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        )}

        {signOutError ? (
          <Text style={styles.errorText}>{signOutError}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default Profile;
