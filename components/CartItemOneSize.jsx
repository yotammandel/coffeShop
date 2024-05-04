import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function CartItemOneSize({ item }) {
  const [counter, setCounter] = useState(1);
  const addToCart = () => {
    setCounter(counter + 1);
  };
  const removeFromCart = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <LinearGradient
      colors={["#252A32", "rgba(38, 43, 51, 0)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View>
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.desc}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={styles.size}>
                <Text style={styles.text}>{item.sizeM}</Text>
              </View>
              <View style={styles.dollarContainer}>
                <Text style={styles.dollar}>$</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={styles.addButton}
                onPress={removeFromCart}
              >
                <View style={styles.addIcon}>
                  <Text style={{ color: "white", fontSize: 25 }}>-</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.countContainer}>
                <Text style={styles.text}>{counter}</Text>
              </View>

              <TouchableOpacity style={styles.addButton} onPress={addToCart}>
                <View style={styles.addIcon}>
                  <Text style={{ color: "white", fontSize: 25 }}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    marginTop: 20,
    marginLeft: 30,
    height: 150,
    width: 330,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  image: {
    height: 130,
    width: 130,
    alignSelf: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
  },
  description: {
    color: "#AEAEAE",
    fontSize: 12,
    paddingTop: 5,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "start",
    gap: 15,
  },
  roastedContainer: {
    backgroundColor: "#141921",
    width: 118,
    height: 40,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  size: {
    backgroundColor: "#0C0F14",
    width: 72,
    height: 35,
    borderRadius: 10,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginRight: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
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
  countContainer: {
    width: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0C0F14",
    borderRadius: 10,
    borderColor: "#D17842",
    borderWidth: 1,
  },
});
