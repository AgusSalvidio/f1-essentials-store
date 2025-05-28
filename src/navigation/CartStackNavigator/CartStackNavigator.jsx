import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../../screens/Cart/Cart";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const CartStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="CartScreen" component={Cart} />
  </Stack.Navigator>
);

export default CartStackNavigator;
