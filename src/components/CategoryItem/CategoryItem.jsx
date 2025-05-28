import { Text, Pressable, View, Image } from "react-native";
import Card from "../Card/Card";
import { styles } from "./CategoryItem.styles";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../../features/Shop/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  const goToItemListCategory = () => {
    dispatch(setCategorySelected(category.name));
    navigation.navigate("ItemListCategory", { category });
  };

  return (
    <Card style={styles.card}>
      <Pressable onPress={goToItemListCategory} style={styles.pressable}>
        <Image
          source={{ uri: category.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textOverlay}>
          <Text style={styles.text}>{category.name}</Text>
        </View>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;
