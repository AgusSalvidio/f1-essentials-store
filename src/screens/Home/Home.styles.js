import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.background,
    padding: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.background,
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "Inter",
    color: colors.greyText,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Inter",
  },
});
