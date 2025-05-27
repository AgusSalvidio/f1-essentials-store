import { SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./App.styles";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import store from "./src/store";
import { useEffect } from "react";
import { useSession } from "./src/hooks/useSession";

export default function App() {
  const { initDB } = useSession();
  const [fontsLoaded, fontError] = useFonts({
    Inter: require("./assets/Inter-VariableFont_opsz,wght.ttf"),
  });

  useEffect(() => {
    initDB();
  }, []);

  if (!fontsLoaded || fontError) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}
