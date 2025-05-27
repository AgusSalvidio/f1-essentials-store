import Orders from "../../screens/Orders/Orders";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OrdersScreen" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrderStackNavigator;
