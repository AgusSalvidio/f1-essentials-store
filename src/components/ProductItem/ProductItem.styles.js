import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: colors.darkText,
    fontWeight: "600",
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "700",
  },
});
