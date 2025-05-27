import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackNavigator from "../HomeStackNavigator/HomeStackNavigator";

import Header from "../../components/Header/Header";
import { colors } from "../../global/colors";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import CartStackNavigator from "../CartStackNavigator/CartStackNavigator";
import OrderStackNavigator from "../OrderStackNavigator/OrderStackNavigator";
import { styles } from "./BottomTabNavigator.styles";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header route={route} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="HomeScreenNavigator"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? colors.primary : colors.greyText}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="shoppingcart"
                size={24}
                color={focused ? colors.primary : colors.greyText}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Entypo
                  name="menu"
                  size={24}
                  color={focused ? colors.primary : colors.greyText}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
