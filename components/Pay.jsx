import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Pay() {
  const handlePayPress = () => {
    // payment logic
    console.log("Paying...");
  };
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.text}>Total Price</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.dollar}>$</Text>
          <Text style={styles.price}>10.7</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handlePayPress}>
        <View style={styles.payButton}>
          <Text style={styles.PayText}>Pay</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    marginTop: 5,
  },
  detailsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#aeaeae",
  },
  payButton: {
    width: 240,
    height: 50,
    backgroundColor: "#D17842",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  PayText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  dollar: {
    color: "#D17842",
    fontSize: 18,
  },
  price: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
});
