import { Image, Pressable, Text } from "react-native";
import Card from "../Card/Card";
import { styles } from "./ProductItem.styles";
import { useDispatch } from "react-redux";
import { setIdSelected } from "../../features/Shop/shopSlice";

const ProductItem = ({ product, navigation }) => {
  const dispatch = useDispatch();

  const goToItemDetail = () => {
    dispatch(setIdSelected(product.id));
    navigation.navigate("ItemDetail", { productId: product.id });
  };

  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={goToItemDetail}
        android_ripple={{ color: "#ccc" }}
      >
        <Text
          style={styles.textCategory}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {product.title}
        </Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
      </Pressable>
    </Card>
  );
};

export default ProductItem;
