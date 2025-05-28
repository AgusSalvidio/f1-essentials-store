import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Orders from "../../screens/Orders/Orders";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const OrderStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="OrdersScreen" component={Orders} />
  </Stack.Navigator>
);

export default OrderStackNavigator;
