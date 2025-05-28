import {
  FlatList,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./Cart.styles";
import CartItem from "../../components/CartItem/CartItem";
import { usePostOrderMutation } from "../../services/shopServices";
import { clearCart, removeCartItem } from "../../features/Cart/cartSlice";

import { showAlert, showConfirm } from "../../utils/alerts";

const Cart = () => {
  const dispatch = useDispatch();
  const { items: CartData, total } = useSelector((state) => state.cart.value);
  const { localId } = useSelector((state) => state.auth.value);
  const [triggerPostOrder, { isLoading }] = usePostOrderMutation();

  const onConfirmOrder = async () => {
    const createdAt = new Date().toISOString();
    try {
      await triggerPostOrder({
        createdAt,
        items: CartData,
        user: localId,
        total,
      }).unwrap();
      dispatch(clearCart());
      showAlert("Orden confirmada", "Tu compra fue realizada con éxito.");
    } catch (e) {
      showAlert("Error", "Hubo un problema al procesar tu orden.");
    }
  };

  const handleDeleteItem = (item) => {
    showConfirm(
      "Eliminar producto",
      `¿Querés eliminar "${item.title}" del carrito?`,
      () => dispatch(removeCartItem(item))
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
