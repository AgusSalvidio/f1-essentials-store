import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./ItemDetail.styles";
import { useGetProductByIdQuery } from "../../services/shopServices";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../features/Cart/cartSlice";
import { AntDesign } from "@expo/vector-icons";

const ItemDetail = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [orientation, setOrientation] = useState("portrait");
  const [addedToCart, setAddedToCart] = useState(false);
  const { width, height } = useWindowDimensions();

  const { productId: idSelected } = route.params;

  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(idSelected);

  useEffect(() => {
    setOrientation(width > height ? "landscape" : "portrait");
  }, [width, height]);

  const addProductToCart = () => {
    dispatch(addCartItem({ ...product, quantity: 1 }));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (isLoading) {
    return (
      <View style={[styles.centered, { flex: 1 }]}>
        <ActivityIndicator size="large" color="#ff6f61" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.centered, { flex: 1 }]}>
        <Text style={{ color: "red" }}>Error al cargar el producto.</Text>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <AntDesign name="arrowleft" size={20} color="#333" />
          <Text style={styles.backButtonText}>Volver</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <>
      <View style={styles.backContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <AntDesign name="arrowleft" size={20} color="#333" />
          <Text style={styles.backButtonText}>Volver</Text>
        </Pressable>
      </View>

      {product && (
        <View
          style={
            orientation === "portrait"
              ? styles.mainContainer
              : styles.mainContainerLandscape
          }
        >
          <Image
            source={{ uri: product.images[0] }}
            resizeMode="contain"
            style={
              orientation === "portrait" ? styles.image : styles.imageLandscape
            }
          />

          <View
            style={
              orientation === "portrait"
                ? styles.textContainer
                : styles.textContainerLandscape
            }
          >
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>

            <Pressable
              style={[
                styles.cartButton,
                addedToCart && { backgroundColor: "#4BB543" },
              ]}
              onPress={addProductToCart}
              disabled={addedToCart}
            >
              <Text style={styles.cartButtonText}>
                {addedToCart ? "✔ Agregado" : "Agregar al carrito"}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default ItemDetail;
