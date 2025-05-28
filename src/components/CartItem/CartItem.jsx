import { Text, View, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { styles } from "./CartItem.styles";

const CartItem = ({ cartItem, onDelete }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{cartItem.title}</Text>
        <Text style={styles.text2}>{cartItem.brand}</Text>
        <Text style={styles.text2}>${cartItem.price}</Text>
      </View>
      <Pressable onPress={() => onDelete(cartItem)}>
        <Entypo name="trash" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default CartItem;
