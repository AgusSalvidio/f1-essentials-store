import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackNavigator from "../HomeStackNavigator/HomeStackNavigator";
import CartStackNavigator from "../CartStackNavigator/CartStackNavigator";
import OrderStackNavigator from "../OrderStackNavigator/OrderStackNavigator";
import ProfileStackNavigator from "../ProfileStackNavigator/ProfileStackNavigator";

import Header from "../../components/Header/Header";
import { colors } from "../../global/colors";
import { styles } from "./BottomTabNavigator.styles";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const Tab = createBottomTabNavigator();

const tabIcons = {
  HomeScreenNavigator: {
    IconComponent: Entypo,
    iconName: "home",
  },
  Cart: {
    IconComponent: AntDesign,
    iconName: "shoppingcart",
  },
  Orders: {
    IconComponent: Entypo,
    iconName: "menu",
  },
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <Header route={route} />,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          const { IconComponent, iconName } = tabIcons[route.name];
          return (
            <View>
              <IconComponent
                name={iconName}
                size={24}
                color={focused ? colors.primary : colors.greyText}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="HomeScreenNavigator" component={HomeStackNavigator} />
      <Tab.Screen name="Cart" component={CartStackNavigator} />
      <Tab.Screen name="Orders" component={OrderStackNavigator} />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: "none" }, // Oculta el espacio en la tab bar
          header: () => <Header />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
