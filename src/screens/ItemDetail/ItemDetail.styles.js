import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  imageLandscape: {
    width: "45%",
    height: 200,
  },
  textContainer: { flexDirection: "column" },
  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  price: {
    textAlign: "right",
    width: "100%",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  backButtonContainer: {
    width: "100%",
    alignItems: "flex-start",
    padding: 10,
  },
});
