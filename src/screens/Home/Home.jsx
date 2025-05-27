import { FlatList, View } from "react-native";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { styles } from "./Home.styles";
import { useGetCategoriesQuery } from "../../services/shopServices";

const Home = ({ route, navigation }) => {
  const { data: categories } = useGetCategoriesQuery();
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={categories}
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
