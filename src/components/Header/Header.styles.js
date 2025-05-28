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
    width: 70,
    height: 70,
  },
  profileButton: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});
