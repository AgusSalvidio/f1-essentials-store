import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useGetLocationQuery } from "../../services/shopServices";
import AddressItem from "../../components/AddressItem/AddressItem";
import { styles } from "./ListAddress.styles";
import { useState } from "react";

const ListAddress = ({ navigation }) => {
  const { localId } = useSelector((state) => state.auth.value);
  const { data: location, isLoading, error } = useGetLocationQuery(localId);

  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigate = () => {
    setIsNavigating(true);
    navigation.navigate("LocationSelectorScreen");
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cargando ubicación...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error al cargar ubicación</Text>
        <Button
          color="red"
          title="Configurar ubicación"
          onPress={handleNavigate}
          disabled={isNavigating}
        />
      </View>
    );
  }

  return location ? (
    <AddressItem location={location} navigation={navigation} />
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>Ubicación no configurada</Text>
      <Button
        color="red"
        title="Configurar ubicación"
        onPress={handleNavigate}
        disabled={isNavigating}
      />
    </View>
  );
};

export default ListAddress;
