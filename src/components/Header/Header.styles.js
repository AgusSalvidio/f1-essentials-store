import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logo: {
    width: 50,
    height: 50,
  },
  profileButton: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});
