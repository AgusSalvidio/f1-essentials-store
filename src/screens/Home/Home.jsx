import { ActivityIndicator, FlatList, Text, View } from "react-native";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { styles } from "./Home.styles";
import { useGetCategoriesQuery } from "../../services/shopServices";
import { colors } from "../../global/colors";

const Home = ({ route, navigation }) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loaderText}>Cargando categorías...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.errorText}>
          Ocurrió un error al cargar las categorías.
        </Text>
      </View>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.errorText}>No hay categorías disponibles.</Text>
      </View>
    );
  }

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
