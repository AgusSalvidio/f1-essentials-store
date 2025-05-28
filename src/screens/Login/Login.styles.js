import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lighText,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "Inter",
  },
  sub: {
    fontSize: 14,
    color: "black",
  },
  subLink: {
    fontSize: 14,
    color: "blue",
  },
  apiError: {
    color: "red",
    fontFamily: "Inter",
    fontSize: 14,
    marginVertical: 5,
    fontStyle: "italic",
    textAlign: "center",
  },
});
