import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.lighText,
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.greyText,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontFamily: "Inter",
    fontSize: 18,
    color: colors.darkText,
    marginBottom: 6,
  },
  text2: {
    fontFamily: "Inter",
    fontSize: 14,
    color: colors.darkText,
  },
});
