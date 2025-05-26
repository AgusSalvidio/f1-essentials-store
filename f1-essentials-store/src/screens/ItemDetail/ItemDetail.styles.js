import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  imageLandscape: {
    width: "45%",
    height: 200,
  },
  textContainer: { flexDirection: "column" },
  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 10,
  },
  price: { textAlign: "right", width: "100%" },
  button: { backgroundColor: colors.primary },
  backButtonContainer: {
    width: "100%",
    alignItems: "flex-start",
    padding: 10,
  },
});
