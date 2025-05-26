import { Button, Image, Text, View, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import allProducts from "../../data/products.json";
import { styles } from "./ItemDetail.styles";

const ItemDetail = ({ route, navigation }) => {
  const [product, setProduct] = useState(null);
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();
  const { productId: idSelected } = route.params;

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    );
    setProduct(productSelected);
  }, [idSelected]);
  console.log(product?.images[0]);

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
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Button color="red" title="Agregar al carrito" />
          </View>
        </View>
      ) : null}
    </>
  );
};

export default ItemDetail;
