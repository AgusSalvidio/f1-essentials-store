import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 5,
    marginBottom: 15,
  },
  backText: {
    fontSize: 16,
    color: "#333",
  },
  title: {
    fontFamily: "Inter",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "600",
    color: "#111",
  },
  coordinates: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    paddingVertical: 10,
    textAlign: "center",
    color: "#444",
  },
  noLocationContainer: {
    width: 250,
    height: 150,
    borderWidth: 2,
    borderColor: colors.greyText,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    maxWidth: 320,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
