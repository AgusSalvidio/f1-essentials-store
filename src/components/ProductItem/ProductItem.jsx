import { Image, Pressable, Text, View } from "react-native";
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
    <Card style={styles.card}>
      <Pressable
        style={styles.pressable}
        onPress={goToItemDetail}
        android_ripple={{ color: "#ddd" }}
      >
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
        <View style={styles.textContainer}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
            {product.title}
          </Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Card>
  );
};

export default ProductItem;
