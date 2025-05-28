import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login/Login";
import SignUp from "../../screens/SignUp/SignUp";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
