import { Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { styles } from "./CartItem.styles";

const CartItem = ({ cartItem }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{cartItem.title}</Text>
        <Text style={styles.text2}>{cartItem.brand}</Text>
        <Text style={styles.text2}>{cartItem.price}</Text>
      </View>
      <Entypo name="trash" size={30} color="black" />
    </View>
  );
};

export default CartItem;
