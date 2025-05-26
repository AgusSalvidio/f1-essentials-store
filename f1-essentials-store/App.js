import { SafeAreaView } from "react-native";
import Header from "./src/components/Header/Header";
import Home from "./src/screens/Home/Home";
import ItemListCategory from "./src/screens/ItemListCategory/ItemListCategory";
import ItemDetail from "./src/screens/ItemDetail/ItemDetail";
import { useFonts } from "expo-font";
import { useState } from "react";
import { styles } from "./App.styles";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [itemIdSelected, setItemIdSelected] = useState("");

  const [fontsLoaded, fontError] = useFonts({
    Inter: require("./assets/Inter-VariableFont_opsz,wght.ttf"),
  });

  if (!fontsLoaded || fontError) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="F1 Essentials Store" />
      {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected} />
      ) : !itemIdSelected ? (
        <ItemListCategory
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
          setItemIdSelected={setItemIdSelected}
        />
      ) : (
        <ItemDetail
          idSelected={itemIdSelected}
          setProductSelected={setItemIdSelected}
        />
      )}
    </SafeAreaView>
  );
}
