import { FlatList, Pressable, Text, View } from "react-native";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { styles } from "./Cart.styles";
import { usePostOrderMutation } from "../../services/shopServices";

const Cart = () => {
  const { items: CartData, total } = useSelector((state) => state.cart.value);
  const { localId } = useSelector((state) => state.auth.value);
  const [triggerPostOrder, result] = usePostOrderMutation();

  const onConfirmOrder = () => {
    triggerPostOrder({ items: CartData, user: localId, total });
    // clear cart
  };

  return (
    <View style={styles.contaier}>
      <FlatList
        data={CartData}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable color="red" onPress={onConfirmOrder}>
          <Text>Checkout</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;
