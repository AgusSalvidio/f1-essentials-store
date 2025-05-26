import { Image, Pressable, Text } from "react-native";
import Card from "../Card/Card";
import { styles } from "./ProductItem.styles";

const ProductItem = ({ product, setItemIdSelected = () => {} }) => {
  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={() => setItemIdSelected(product.id)}
      >
        <Text style={styles.textCategory}>{product.title}</Text>
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
