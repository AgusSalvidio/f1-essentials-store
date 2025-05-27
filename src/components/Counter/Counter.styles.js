import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.lighText,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: colors.primary,
  },
  span: {
    backgroundColor: colors.greyText,
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    color: colors.lighText,
  },
  spanInput: {
    backgroundColor: colors.greyText,
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    color: colors.lighText,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Inter",
    color: colors.lighText,
  },
});
