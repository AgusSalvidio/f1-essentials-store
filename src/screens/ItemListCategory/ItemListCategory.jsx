import { useEffect, useState } from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import Search from "../../components/Search/Search";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useGetProductsByCategoryQuery } from "../../services/shopServices";
import { styles } from "./ItemListCategory.styles";

const ItemListCategory = ({ navigation, route }) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  const { category: categorySelected } = route.params;

  const {
    data: productFetched = [],
    error: errorFromFetch,
    isLoading,
  } = useGetProductsByCategoryQuery(categorySelected);

  useEffect(() => {
    const regex = /\d/;
    const hasDigits = regex.test(keyWord);

    if (hasDigits) {
      setError("No se permiten números");
      setProductsFiltered([]);
      return;
    }

    setError("");

    if (!isLoading && productFetched.length > 0) {
      const filtered = productFetched.filter((product) =>
        product.title.toLowerCase().includes(keyWord.toLowerCase())
      );
      setProductsFiltered(filtered);
    }
  }, [keyWord, productFetched, isLoading]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ff0000" />
      </View>
    );
  }

  if (errorFromFetch) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", textAlign: "center" }}>
          Error cargando productos.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => navigation.goBack()}
      />
      {productsFiltered.length === 0 && !error ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          No se encontraron productos.
        </Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.listContent}
          data={productsFiltered}
          renderItem={({ item }) => (
            <ProductItem product={item} navigation={navigation} />
          )}
          keyExtractor={(product) => product.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ItemListCategory;
