import { useEffect, useState } from "react";
import { Alert, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator/BottomTabNavigator";
import AuthStackNavigator from "./AuthStackNavigator/AuthStackNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "../hooks/useSession";
import { setUser } from "../features/User/userSlice";
import { styles } from "./Navigator.styles";

const Navigator = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.value.user);
  const { getSession } = useSession();

  const [loading, setLoading] = useState(true);

  const restoreSession = async () => {
    try {
      const response = await getSession();

      if (response) {
        dispatch(
          setUser({
            email: response.email,
            localId: response.localId,
            idToken: response.token,
          })
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "No se pudo recuperar la sesión. Intenta nuevamente más tarde."
      );
      console.error("Error al restaurar sesión:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    restoreSession();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
