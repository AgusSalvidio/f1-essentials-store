import { Pressable, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./AddressItem.styles";

const AddressItem = ({ location, navigation }) => {
  const onChangeLocation = () => {
    navigation.navigate("LocationSelectorScreen");
  };

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{location.address}</Text>
      </View>
      <Pressable
        onPress={onChangeLocation}
        style={({ pressed }) => [
          styles.modifyButton,
          pressed && styles.modifyButtonPressed,
        ]}
      >
        <Entypo name="location" size={24} color="black" />
        <Text style={styles.text2}>Modificar</Text>
      </Pressable>
    </View>
  );
};

export default AddressItem;
