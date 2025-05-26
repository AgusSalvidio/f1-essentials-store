import Home from "../../src/screens/Home/Home";
import ItemListCategory from "../../src/screens/ItemListCategory/ItemListCategory";
import ItemDetail from "../../src/screens/ItemDetail/ItemDetail";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={ItemListCategory} name="ItemListCategory" />
        <Stack.Screen component={ItemDetail} name="ItemDetail" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
