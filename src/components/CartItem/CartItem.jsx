import { Text, View, Pressable, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { styles } from "./CartItem.styles";

const CartItem = ({ cartItem, onDelete }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: cartItem.images[0] }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={1}>
          {cartItem.title}
        </Text>
        <Text style={styles.text2}>{cartItem.brand}</Text>
        <Text style={styles.text2}>${cartItem.price}</Text>
        <Text style={styles.quantity}>Cantidad: {cartItem.quantity}</Text>
      </View>
      <Pressable onPress={() => onDelete(cartItem)} style={styles.deleteButton}>
        <Entypo name="cross" size={24} color="#555" />
      </Pressable>
    </View>
  );
};

export default CartItem;
