import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  button: {
    width: "80%",
    borderWidth: 1,
    backgroundColor: colors.greyText,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    fontFamily: "Inter",
    fontSize: 18,
    color: colors.lighText,
  },
});
