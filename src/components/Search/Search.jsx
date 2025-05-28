import { Pressable, Text, TextInput, View } from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./Search.styles";

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(keyword.trim());
  };

  const handleClear = () => {
    setKeyword("");
    onSearch("");
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable
          onPress={goBack}
          style={styles.iconButton}
          android_ripple={{ color: "#ccc", borderless: true }}
          accessibilityLabel="Volver"
        >
          <AntDesign name="back" size={24} color="#333" />
        </Pressable>

        <TextInput
          style={styles.input}
          placeholder="Buscar productos..."
          value={keyword}
          onChangeText={setKeyword}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
          autoCorrect={false}
          clearButtonMode="while-editing"
        />

        {keyword.length > 0 && (
          <Pressable
            onPress={handleClear}
            style={styles.iconButton}
            android_ripple={{ color: "#ccc", borderless: true }}
            accessibilityLabel="Limpiar búsqueda"
          >
            <FontAwesome5 name="eraser" size={22} color="#333" />
          </Pressable>
        )}

        <Pressable
          onPress={handleSearch}
          style={styles.iconButton}
          android_ripple={{ color: "#ccc", borderless: true }}
          accessibilityLabel="Buscar"
        >
          <FontAwesome name="search" size={24} color="#333" />
        </Pressable>
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </>
  );
};

export default Search;
