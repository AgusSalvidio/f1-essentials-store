import { View, Text, FlatList, Image, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./OrderDetail.styles";

const OrderDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { order } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.images?.[0] }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDetail}>Cantidad: {item.quantity}</Text>
        <Text style={styles.itemDetail}>Precio: ${item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={24} color="#333" />
        <Text style={styles.backText}>Volver</Text>
      </Pressable>

      <Text style={styles.title}>Detalle de Orden</Text>

      <View style={styles.detailCard}>
        <Text style={styles.date}>
          Fecha:{" "}
          {order.createdAt
            ? new Date(order.createdAt).toLocaleString()
            : "Sin fecha"}
        </Text>
        <Text style={styles.total}>Total: ${order.total.toFixed(2)}</Text>
      </View>

      <Text style={styles.subtitle}>Productos:</Text>
      <FlatList
        data={order.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default OrderDetail;
