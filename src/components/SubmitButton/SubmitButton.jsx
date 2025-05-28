import { Pressable, Text } from "react-native";
import { styles } from "./SubmitButton.styles";

const SubmitButton = ({ onPress, title, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        style,
        pressed && { opacity: 0.7 },
      ]}
      android_ripple={{ color: "#ccc" }}
      accessibilityRole="button"
      accessibilityLabel={title}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;
