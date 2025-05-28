import { Text, Pressable, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./OrderItem.styles";

const OrderItem = ({ order, onPress }) => {
  const date = order.createdAt ? new Date(order.createdAt) : null;
  const dateString =
    date && !isNaN(date.getTime())
      ? date.toLocaleString()
      : "Fecha no disponible";

  return (
    <Pressable
      style={styles.card}
      onPress={onPress}
      android_ripple={{ color: "#ccc" }}
      accessibilityRole="button"
      accessibilityLabel={`Ver detalles de la orden del ${dateString}`}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{dateString}</Text>
        <Text style={styles.text2}>Total: ${order.total.toFixed(2)}</Text>
      </View>
      <Feather name="search" size={24} color="#888" />
    </Pressable>
  );
};

export default OrderItem;
