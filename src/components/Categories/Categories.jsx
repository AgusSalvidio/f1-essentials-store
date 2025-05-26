import { Text, Pressable, View } from "react-native";
import Card from "../Card/Card";
import { styles } from "./Categories.styles";

const Categories = ({ category = "", selectCategory = () => {} }) => {
  return (
    <View style={styles.card}>
      <Card>
        <Pressable onPress={() => selectCategory(category)}>
          <Text style={styles.text}>{category}</Text>
        </Pressable>
      </Card>
    </View>
  );
};

export default Categories;
