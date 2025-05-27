import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/Profile/Profile";
import ImageSelector from "../../screens/ImageSelector/ImageSelector";
import LocationSelector from "../../screens/LocationSelector/LocationSelector";
import ListAddress from "../../screens/ListAddress/ListAddress";

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
      <Stack.Screen name="ListAddressScreen" component={ListAddress} />
      <Stack.Screen
        name="LocationSelectorScreen"
        component={LocationSelector}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
