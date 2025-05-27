import { FlatList, View } from "react-native";
import OrderItem from "../../components/OrderItem/OrderItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetOrdersQuery } from "../../services/shopServices";

const Orders = () => {
  const { localId } = useSelector((state) => state.auth.value);
  const { data: orders, isSuccess } = useGetOrdersQuery();
  const [ordersFiltered, setOrdersFiltered] = useState();
  useEffect(() => {
    if (isSuccess) {
      const responseTransformed = Object.values(orders);
      const ordersToFilter = responseTransformed.filter(
        (order) => order.user === localId
      );
      setOrdersFiltered(ordersToFilter);
    }
  }, [orders, isSuccess, localId]);

  return (
    <View>
      <FlatList
        data={ordersFiltered}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
};

export default Orders;
