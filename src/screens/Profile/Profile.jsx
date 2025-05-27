import { Button, Image, View } from "react-native";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../../services/shopServices";
import { styles } from "./Profile.styles";

const Profile = ({ navigation }) => {
  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: imageFromBase } = useGetProfileImageQuery(localId);

  const launchCamera = () => {
    navigation.navigate("ImageSelectorScreen");
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
    </View>
  );
};

export default Profile;
