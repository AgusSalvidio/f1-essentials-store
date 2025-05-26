import { FlatList, View } from "react-native";
import categories from "../../data/categories.json";
import Categories from "../../components/Categories/Categories";
import { styles } from "./Home.styles";

const Home = ({ setCategorySelected }) => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={categories.sort()}
        renderItem={({ item }) => (
          <Categories category={item} selectCategory={setCategorySelected} />
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
