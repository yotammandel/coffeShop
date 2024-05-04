import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function PriceAndCount({ size, price }) {
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
    <View style={styles.container}>
      <View style={styles.size}>
        <Text style={styles.text}>{size}</Text>
      </View>
      <View style={styles.dollarContainer}>
        <Text style={styles.dollar}>$</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={removeFromCart}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    gap: 10,
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
