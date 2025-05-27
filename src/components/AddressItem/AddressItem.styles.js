import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.greyText,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "Inter",
    fontSize: 17,
    color: "black",
  },
  text2: {
    fontFamily: "Inter",
    fontSize: 19,
    color: colors.lighText,
  },
});
