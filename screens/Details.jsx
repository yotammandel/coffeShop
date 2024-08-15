import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import CheckOut from "../components/CheckOut";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Details({ route }) {
  const navigation = useNavigation();
  const { item } = route.params;
  const [selected, setSelected] = useState("S");
  const [favorite, setFavorite] = useState(true);

  const size = ["S", "M", "L"];

  const AddToFavorite = () => {
    console.log("Favorite pressed");
    setFavorite(!favorite);
  };

  function handlePress(size) {
    setSelected(size);
  }

  const AddToCart = () => {
    console.log("Checkout pressed");
  };

  const price =
    item &&
    (item.sizes && item.sizes[0]
      ? item.sizes[0].price
      : item.weight
      ? item.weight[0].price
      : "");

  return (
    <View style={styles.Container}>
      <LinearGradient
        colors={["#252A32", "rgba(38, 43, 51, 0)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.iconContainer}>
              <View style={styles.NavIcon}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign
                    name="left"
                    weight={"bold"}
                    size={16}
                    color="#AEAEAEAE"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.likeIcon}>
                <TouchableOpacity onPress={AddToFavorite}>
                  {favorite ? (
                    <AntDesign name="heart" size={16} color="#dc3532" />
                  ) : (
                    <AntDesign name="heart" size={16} color="#AEAEAEAE" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.desc}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <AntDesign name="star" size={16} color="#D17842" />
                  <Text style={styles.rating}>4.5</Text>
                  <Text style={styles.likes}>({item.likes})</Text>
                </View>
              </View>
              <View>
                <View style={styles.ingredientsContainer}>
                  <View style={styles.ingredients}>
                    <Image source={require("../assets/Beans.png")} />
                    <Text style={styles.ingredientText}>Coffee</Text>
                  </View>
                  <View style={styles.ingredients}>
                    <Image source={require("../assets/drop.png")} />
                    <Text style={styles.ingredientText}>Milk</Text>
                  </View>
                </View>
                <View style={styles.roastedContainer}>
                  <Text style={styles.ingredientText}>Medium Roasted</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.descContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.paragraph}>{item.paragraph}</Text>
      </View>
      <Text style={styles.sizesTitle}>Size</Text>

      <View style={styles.buttonContainer}>
        {size.map((size) => (
          <TouchableOpacity onPress={() => handlePress(size)} key={size}>
            <View
              style={[
                styles.btn,
                selected === size && {
                  color: "#D17842",
                  fontWeight: "bold",
                  borderColor: "#D17842",
                  borderWidth: 2,
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={[
                    styles.Text,
                    selected === size && {
                      color: "#D17842",
                      fontWeight: "bold",
                    },
                  ]}
                >
                  {size}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.addToCartButton}>
        <CheckOut
          totalPrice={price}
          handlePress={AddToCart}
          title={"Add to cart"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    backgroundColor: "#0C0F14",
    height: "100%",
    width: "100%",
  },
  gradient: {
    width: "100%",
    borderRadius: 10,
  },
  imgContainer: {
    position: "relative",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 457,
    borderRadius: 10,
  },
  contentContainer: {
    position: "absolute",
    height: 133,
    bottom: 0,
    left: 0,
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContainer: {
    flex: 1,
    marginRight: 10,
    paddingTop: 20,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#AEAEAE",
    fontSize: 14,
  },
  rating: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  likes: {
    color: "#AEAEAE",
    fontSize: 12,
  },
  ingredientsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ingredients: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 50,
    height: 50,
    backgroundColor: "#141921",
    margin: 10,
  },
  ingredientText: {
    color: "#AEAEAE",
    fontSize: 12,
  },
  roastedContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 118,
    height: 50,
    backgroundColor: "#141921",
    marginLeft: 10,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#AEAEAE",
    paddingLeft: 20,
    paddingTop: 20,
  },
  paragraph: {
    color: "white",
    fontSize: 12,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  likeIcon: {
    position: "absolute",
    backgroundColor: "#21262E",
    width: 30,
    height: 30,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#21262e",
  },
  descContainer: {
    gap: 10,
  },
  addToCartButton: {
    position: "absolute",
    bottom: 40,
  },
  sizes: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sizesTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#AEAEAE",
    alignSelf: "flex-start",
    marginTop: 40,
    marginLeft: 25,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    columnGap: 20,
  },
  Text: {
    color: "#AEAEAE",
    fontWeight: "700",
  },
  btn: {
    backgroundColor: "#141921",
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  NavIcon: {
    backgroundColor: "#21262E",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#21262e",
  },
});
