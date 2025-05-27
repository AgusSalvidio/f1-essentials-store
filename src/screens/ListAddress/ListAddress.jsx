import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useGetLocationQuery } from "../../services/shopServices";
import AddressItem from "../../components/AddressItem/AddressItem";
import { styles } from "./ListAddress.styles";

const ListAddress = ({ navigation }) => {
  const { localId } = useSelector((state) => state.auth.value);
  const { data: location, isLoading, error } = useGetLocationQuery(localId);

  return location ? (
    <AddressItem location={location} navigation={navigation} />
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>Ubicación no configurada</Text>
      <Button
        color="red"
        title="Configurar ubicación"
        onPress={() => navigation.navigate("LocationSelectorScreen")}
      />
    </View>
  );
};

export default ListAddress;
