import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Orders from "../../screens/Orders/Orders";
import OrderDetail from "../../screens/OrderDetail/OrderDetail";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const OrderStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="OrdersScreen" component={Orders} />
    <Stack.Screen name="OrderDetail" component={OrderDetail} />
  </Stack.Navigator>
);

export default OrderStackNavigator;
