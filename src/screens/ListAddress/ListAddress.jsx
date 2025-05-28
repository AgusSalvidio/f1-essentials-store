import { Text, View, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather name="chevron-left" size={24} color="#333" />
        <Text style={styles.backText}>Volver</Text>
      </TouchableOpacity>

      {isLoading ? (
        <Text style={styles.text}>Cargando ubicación...</Text>
      ) : error ? (
        <>
          <Text style={styles.text}>Error al cargar ubicación</Text>
          <TouchableOpacity
            style={[styles.button, isNavigating && { opacity: 0.6 }]}
            onPress={handleNavigate}
            disabled={isNavigating}
          >
            <Text style={styles.buttonText}>Configurar ubicación</Text>
          </TouchableOpacity>
        </>
      ) : location ? (
        <AddressItem location={location} navigation={navigation} />
      ) : (
        <>
          <Text style={styles.text}>Ubicación no configurada</Text>
          <TouchableOpacity
            style={[styles.button, isNavigating && { opacity: 0.6 }]}
            onPress={handleNavigate}
            disabled={isNavigating}
          >
            <Text style={styles.buttonText}>Configurar ubicación</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default ListAddress;
