import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    justifyContent: "space-between",
    backgroundColor: "#f8f8f8",
  },
  totalContainer: {
    height: 100,
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 18,
    color: "#555",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#999",
    fontFamily: "Inter",
  },
});
