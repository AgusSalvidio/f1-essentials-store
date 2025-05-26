import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import products from "../../data/products.json";
import Search from "../../components/Search/Search";
import ProductItem from "../../components/ProductItem/ProductItem";

const ItemListCategory = ({
  categorySelected = "",
  setCategorySelected = () => {},
  setItemIdSelected = () => {},
}) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const regex = /\d/;
    const hasDigits = regex.test(keyWord);
    if (hasDigits) {
      setError("No se permiten numeros");
      return;
    }
    const productsPrefiltered = products.filter(
      (product) => product.category === categorySelected
    );
    const productsFilter = productsPrefiltered.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    );
    setProductsFiltered(productsFilter);
    setError("");
  }, [keyWord, categorySelected]);
  return (
    <View>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => setCategorySelected("")}
      />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem product={item} setItemIdSelected={setItemIdSelected} />
        )}
        keyExtractor={(product) => product.id}
      />
    </View>
  );
};

export default ItemListCategory;
