import { Image, Pressable, View } from "react-native";
import { styles } from "./Header.styles";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Pressable
        style={styles.profileButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Entypo name="user" size={28} color="white" />
      </Pressable>
    </View>
  );
};

export default Header;
