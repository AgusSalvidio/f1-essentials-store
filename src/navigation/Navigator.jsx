import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import BottomTabNavigator from "./BottomTabNavigator/BottomTabNavigator";
import AuthStackNavigator from "./AuthStackNavigator/AuthStackNavigator";

const Navigator = () => {
  const { user } = useSelector((state) => state.auth.value);
  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
