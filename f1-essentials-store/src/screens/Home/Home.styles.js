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
    justifyContent: "space-between", // reparte los 3 ítems en la fila
    marginBottom: 15, // espacio entre filas
  },
});
