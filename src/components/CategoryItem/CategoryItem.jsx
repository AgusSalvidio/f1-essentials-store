import { Text, Pressable, View } from "react-native";
import Card from "../Card/Card";
import { styles } from "./CategoryItem.styles";

const CategoryItem = ({ category, navigation }) => {
  return (
    <View style={styles.card}>
      <Card>
        <Pressable
          onPress={() => navigation.navigate("ItemListCategory", { category })}
        >
          <Text style={styles.text}>{category}</Text>
        </Pressable>
      </Card>
    </View>
  );
};

export default CategoryItem;
