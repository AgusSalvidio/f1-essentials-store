import { Pressable, Text } from "react-native";
import { colors } from "../../global/colors";
import { styles } from "./AddButton.styles";

const AddButton = ({
  title = "",
  onPress = () => {},
  color = colors.lighText,
}) => {
  return (
    <Pressable
      style={{ ...styles.button, backgroundColor: color }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AddButton;
