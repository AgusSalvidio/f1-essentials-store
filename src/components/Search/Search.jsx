import { Pressable, Text, TextInput, View } from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./Search.styles";

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      onSearch(keyword.trim());
    }
  };

  const handleClear = () => {
    setKeyword("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
        clearButtonMode="while-editing"
        autoCorrect={false}
      />
      <Pressable
        onPress={handleSearch}
        android_ripple={{ color: "#ccc", borderless: true }}
        accessibilityLabel="Buscar"
      >
        <FontAwesome name="search" size={24} color="black" />
      </Pressable>
      <Pressable
        onPress={handleClear}
        android_ripple={{ color: "#ccc", borderless: true }}
        accessibilityLabel="Limpiar búsqueda"
      >
        <FontAwesome5 name="eraser" size={24} color="black" />
      </Pressable>
      <Pressable
        onPress={goBack}
        android_ripple={{ color: "#ccc", borderless: true }}
        accessibilityLabel="Volver"
      >
        <AntDesign name="back" size={24} color="black" />
      </Pressable>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Search;
