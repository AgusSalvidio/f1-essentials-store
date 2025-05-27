import { FlatList, StyleSheet, View } from "react-native";
import OrderData from "../../data/orders.json";
import OrderItem from "../../components/OrderItem/OrderItem";

const Orders = () => {
  return (
    <View>
      <FlatList
        data={OrderData}
        keyExtractor={(orderItem) => orderItem.id}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
};

export default Orders;
