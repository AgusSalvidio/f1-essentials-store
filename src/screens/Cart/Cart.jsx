import {
  FlatList,
  Text,
  View,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./Cart.styles";
import CartItem from "../../components/CartItem/CartItem";
import { usePostOrderMutation } from "../../services/shopServices";
import { clearCart, removeCartItem } from "../../features/Cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items: CartData, total } = useSelector((state) => state.cart.value);
  const { localId } = useSelector((state) => state.auth.value);
  const [triggerPostOrder, { isLoading }] = usePostOrderMutation();

  const onConfirmOrder = async () => {
    try {
      await triggerPostOrder({
        items: CartData,
        user: localId,
        total,
      }).unwrap();
      dispatch(clearCart());
      Alert.alert("Orden confirmada", "Tu compra fue realizada con éxito.");
    } catch (e) {
      Alert.alert("Error", "Hubo un problema al procesar tu orden.");
    }
  };

  const handleDeleteItem = (item) => {
    Alert.alert(
      "Eliminar producto",
      `¿Estás seguro que querés eliminar "${item.title}" del carrito?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => dispatch(removeCartItem(item)),
        },
      ]
    );
  };

  if (!CartData.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Tu carrito está vacío.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item }) => (
          <CartItem cartItem={item} onDelete={() => handleDeleteItem(item)} />
        )}
      />
      <View style={styles.totalContainer}>
        <Pressable
          style={styles.button}
          onPress={onConfirmOrder}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>Checkout</Text>
          )}
        </Pressable>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default Cart;
