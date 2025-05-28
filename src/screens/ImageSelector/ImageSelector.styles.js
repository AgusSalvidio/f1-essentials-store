import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  noPhotoContainer: {
    borderWidth: 2,
    borderColor: colors.greyText,
    borderRadius: 12,
    padding: 20,
    width: "100%",
    alignItems: "center",
    gap: 20,
  },
  noPhotoText: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 5,
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: "#333",
  },
});
