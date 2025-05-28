import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  pressable: {
    width: "100%",
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  textOverlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 6,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter",
  },
});
