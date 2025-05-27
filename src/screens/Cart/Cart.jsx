import { FlatList, Pressable, Text, View } from "react-native";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { styles } from "./Cart.styles";

const Cart = () => {
  const { items: CartData, total } = useSelector((state) => state.cart.value);
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
        <Pressable>
          <Text>Checkout</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;
