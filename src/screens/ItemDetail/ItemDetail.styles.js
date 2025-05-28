import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 16,
    gap: 16,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    padding: 16,
    gap: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 12,
  },
  imageLandscape: {
    width: "45%",
    height: 220,
    borderRadius: 12,
  },
  textContainer: {
    flexDirection: "column",
    gap: 12,
  },
  textContainerLandscape: {
    flex: 1,
    flexDirection: "column",
    gap: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#222",
  },
  description: {
    fontSize: 16,
    color: "#444",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
  cartButton: {
    marginTop: 10,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  cartButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  backContainer: {
    padding: 10,
    alignItems: "flex-start",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  backButtonText: {
    fontSize: 16,
    color: "#333",
  },
});
