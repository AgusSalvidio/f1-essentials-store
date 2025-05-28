import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  card: {
    width: "45%",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: colors.lighText,
  },
  pressable: {
    padding: 10,
  },
});
