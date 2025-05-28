import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    paddingVertical: 20,
    fontFamily: "Inter",
    fontSize: 18,
    color: "#444",
    textAlign: "center",
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
    maxWidth: 320,
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
    marginBottom: 15,
  },
  backText: {
    fontSize: 16,
    color: "#333",
  },
});
