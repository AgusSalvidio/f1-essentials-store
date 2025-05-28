import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    gap: 15,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginVertical: 10,
    fontFamily: "Inter",
    color: "#333",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 8,
    width: "100%",
  },

  logout: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    fontFamily: "Inter",
    textAlign: "center",
    marginTop: 10,
  },
});
