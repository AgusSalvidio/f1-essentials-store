import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/Profile/Profile";
import ImageSelector from "../../screens/ImageSelector/ImageSelector";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ImageSelectorScreen" component={ImageSelector} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
