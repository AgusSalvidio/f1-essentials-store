import { FlatList, View } from "react-native";
import categories from "../../data/categories.json";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { styles } from "./Home.styles";

const Home = ({ route, navigation }) => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={categories.sort()}
        renderItem={({ item }) => (
          <CategoryItem category={item} navigation={navigation} />
        )}
        keyExtractor={(itemElement) => itemElement}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Home;
