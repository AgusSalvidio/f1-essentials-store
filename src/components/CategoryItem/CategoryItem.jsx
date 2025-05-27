import { Text, Pressable, View } from "react-native";
import Card from "../Card/Card";
import { styles } from "./CategoryItem.styles";
import { useDispatch } from "react-redux";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  const goToItemListCategory = () => {
    dispatch(setCategorySelected(category));
    navigation.navigate("ItemListCategory", { category });
  };

  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <Pressable onPress={goToItemListCategory}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;
