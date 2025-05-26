import { Text, View, useWindowDimensions } from "react-native";
import { styles } from "./Header.styles";

const Header = ({ title }) => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={width > 360 ? styles.text : styles.textSm}>{title}</Text>
    </View>
  );
};

export default Header;
