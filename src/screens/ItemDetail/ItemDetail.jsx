import {
  Button,
  Image,
  Text,
  View,
  useWindowDimensions,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./ItemDetail.styles";
import { useGetProductByIdQuery } from "../../services/shopServices";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../features/Cart/cartSlice";

const ItemDetail = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();

  const { productId: idSelected } = route.params;
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(idSelected);

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  const addProductToCart = () => {
    dispatch(addCartItem({ ...product, quantity: 1 }));
    Alert.alert(
      "Producto agregado",
      `${product.title} fue agregado al carrito.`
    );
  };

  if (isLoading) {
    return (
      <View
        style={[
          styles.mainContainer,
          { justifyContent: "center", alignItems: "center", flex: 1 },
        ]}
      >
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={[
          styles.mainContainer,
          { justifyContent: "center", alignItems: "center", flex: 1 },
        ]}
      >
        <Text style={{ color: "red" }}>Error al cargar el producto.</Text>
        <Button
          title="Volver"
          color="red"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

  return (
    <>
      <View style={styles.backButtonContainer}>
        <Button
          title="Volver"
          color="red"
          onPress={() => navigation.goBack()}
        />
      </View>

      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.mainContainer
              : styles.mainContainerLandscape
          }
        >
          {product.images && product.images.length > 0 && (
            <Image
              source={{ uri: product.images[0] }}
              resizeMode="contain"
              style={
                orientation === "portrait"
                  ? styles.image
                  : styles.imageLandscape
              }
            />
          )}

          <View
            style={
              orientation === "portrait"
                ? styles.textContainer
                : styles.textContainerLandscape
            }
          >
            <Text style={styles.title}>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <View style={{ marginTop: 10 }}>
              <Button
                color="red"
                title="Agregar al carrito"
                onPress={addProductToCart}
              />
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default ItemDetail;
