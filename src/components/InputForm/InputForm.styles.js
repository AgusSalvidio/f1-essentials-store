import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  subtitle: {
    width: "90%",
    fontSize: 16,
    fontFamily: "Inter",
  },
  error: {
    paddinTop: 2,
    fontSize: 16,
    color: colors.primary,
    fontFamily: "Inter",
    fontStyle: "italic",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: colors.greyText,
    padding: 8,
    borderRadius: 4,
    fontFamily: "Inter",
    fontSize: 14,
    backgroundColor: colors.lighText,
  },
});
