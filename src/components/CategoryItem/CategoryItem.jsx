import { Text, Pressable, View } from "react-native";
import Card from "../Card/Card";
import { styles } from "./CategoryItem.styles";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../../features/Shop/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  const goToItemListCategory = () => {
    dispatch(setCategorySelected(category));
    navigation.navigate("ItemListCategory", { category });
  };

  return (
    <Card style={styles.card}>
      <Pressable onPress={goToItemListCategory} style={styles.pressable}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;
