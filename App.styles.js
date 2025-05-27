import { StyleSheet, Platform, StatusBar } from "react-native";
import { colors } from "./src/global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.background,
  },
});
