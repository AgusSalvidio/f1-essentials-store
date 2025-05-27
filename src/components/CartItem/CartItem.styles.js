import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.lighText,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "Inter",
    fontSize: 20,
    color: colors.primary,
  },
  text2: {
    fontFamily: "Inter",
    fontSize: 16,
    color: colors.primary,
  },
});
