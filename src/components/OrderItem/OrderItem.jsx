import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./OrderItem.styles";

const OrderItem = ({ order }) => {
  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {new Date(order.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.text2}>{order.total}</Text>
      </View>
      <Feather name="search" size={30} color="black" />
    </View>
  );
};

export default OrderItem;
