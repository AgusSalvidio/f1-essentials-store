import { Text, Pressable, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./OrderItem.styles";

const OrderItem = ({ order, onPress }) => {
  return (
    <Pressable
      style={styles.card}
      onPress={onPress}
      android_ripple={{ color: "#ccc" }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {new Date(order.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.text2}>Total: ${order.total.toFixed(2)}</Text>
      </View>
      <Feather name="search" size={30} color="black" />
    </Pressable>
  );
};

export default OrderItem;
