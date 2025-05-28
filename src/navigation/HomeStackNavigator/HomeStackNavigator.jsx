import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home/Home";
import ItemListCategory from "../../screens/ItemListCategory/ItemListCategory";
import ItemDetail from "../../screens/ItemDetail/ItemDetail";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const HomeStackNavigator = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
    <Stack.Screen name="ItemDetail" component={ItemDetail} />
  </Stack.Navigator>
);

export default HomeStackNavigator;
