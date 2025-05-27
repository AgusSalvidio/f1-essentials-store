import { SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./App.styles";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: require("./assets/Inter-VariableFont_opsz,wght.ttf"),
  });

  if (!fontsLoaded || fontError) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}
