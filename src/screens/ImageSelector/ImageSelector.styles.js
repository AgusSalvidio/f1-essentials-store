import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  noPhotoContainer: {
    padding: 10,
    gap: 15,
    borderWidth: 2,
    borderColor: colors.greyText,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
