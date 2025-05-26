import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.lighText,
    fontFamily: "Inter",
    fontSize: 24,
  },
  textSm: {
    color: colors.lighText,
    fontFamily: "Inter",
    fontSize: 16,
  },
});
