import { Button, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../../services/shopServices";
import { styles } from "./Profile.styles";
import { useSession } from "../../hooks/useSession";
import { clearUser } from "../../features/User/userSlice";

const Profile = ({ navigation }) => {
  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: imageFromBase } = useGetProfileImageQuery(localId);
  const { truncateSessionTable } = useSession();
  const dispatch = useDispatch();

  const launchCamera = () => {
    navigation.navigate("ImageSelectorScreen");
  };

  const launchLocation = () => {
    navigation.navigate("ListAddressScreen");
  };

  const signOut = async () => {
    try {
      await truncateSessionTable();
      dispatch(clearUser());
    } catch (err) {
      console.log(err);
    }
  };

  const defaultImage = "../../../assets/images/defaultProfile.png";

  return (
    <View style={styles.container}>
      {imageFromBase || imageCamera ? (
        <Image
          source={{ uri: imageFromBase?.image || imageCamera }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={require(defaultImage)}
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
      <Button color="red" title="Cerrar Sesión" onPress={signOut} />
    </View>
  );
};

export default Profile;
