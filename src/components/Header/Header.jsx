import { Image, Pressable, View } from "react-native";
import { styles } from "./Header.styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../global/colors";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/white-icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Pressable
        style={styles.profileButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons name="person" size={28} color={colors.lighText} />
      </Pressable>
    </View>
  );
};

export default Header;
