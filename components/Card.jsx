import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Card({ imgSrc, title, description, price }) {
  const handleCardPress = () => {
    console.log("card pressed");
  };
  const addToCart = () => {
    console.log("add to cart pressed");
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <LinearGradient
        colors={["#252A32", "rgba(38, 43, 51, 0)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: imgSrc }} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.priceContainer}>
            <View style={styles.dollarContainer}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.price}>{price}</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={addToCart}>
              <View style={styles.addIcon}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 7,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
    alignSelf: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
  },
  description: {
    color: "white",
    fontSize: 12,
    paddingTop: 5,
  },
  price: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  dollar: {
    color: "#D17842",
    fontSize: 18,
  },
  dollarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addIcon: {
    backgroundColor: "#D17842",
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "white",
    fontSize: 25,
  },
  addButton: {
    backgroundColor: "#D17842",
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    marginTop: 20,
    marginLeft: 30,
    height: 250,
    width: 155,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
