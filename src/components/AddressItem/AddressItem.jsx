import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./AddressItem.styles";

const AddressItem = ({ location, navigation }) => {
  const onChangeLocation = () => {
    navigation.navigate("LocationSelectorScreen");
  };

  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{location.address}</Text>
      </View>
      <Pressable color="red" onPress={onChangeLocation}>
        <Entypo name="location" size={30} color="black">
          <Text style={styles.text2}>Modificar</Text>
        </Entypo>
      </Pressable>
    </View>
  );
};

export default AddressItem;
