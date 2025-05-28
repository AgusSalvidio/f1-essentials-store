import { FlatList, View, Text, ActivityIndicator } from "react-native";
import OrderItem from "../../components/OrderItem/OrderItem";
import { useSelector } from "react-redux";
import { useGetOrdersQuery } from "../../services/shopServices";
import { useMemo } from "react";
import { styles } from "./Orders.styles";

const Orders = () => {
  const { localId } = useSelector((state) => state.auth.value);
  const {
    data: orders,
    isLoading,
    isError,
    error,
    isFetching,
  } = useGetOrdersQuery();

  const ordersFiltered = useMemo(() => {
    if (!orders) return [];
    return Object.values(orders).filter((order) => order.user === localId);
  }, [orders, localId]);

  if (isLoading || isFetching) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          Error cargando órdenes: {error?.message || "Intenta de nuevo"}
        </Text>
      </View>
    );
  }

  if (ordersFiltered.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No tienes órdenes registradas.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={ordersFiltered}
        keyExtractor={(item) => item.id || item.localId || item.user}
        renderItem={({ item }) => <OrderItem order={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Orders;
