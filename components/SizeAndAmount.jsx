import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SizeAndAmount({ size, price, amount, total }) {
  return (
    <View style={styles.container}>
      <View style={styles.sizeAndPrice}>
        <Text style={styles.size}>{size}</Text>
        <View style={styles.line} />
        <View style={styles.dollarContainer}>
          <Text style={styles.dollar}>$</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.multi}>x</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <Text style={styles.total}>{total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  sizeAndPrice: {
    marginTop: 10,
    width: 140,
    height: 35,
    backgroundColor: "#0C0F14",
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
  },
  line: {
    width: 1,
    height: "100%",
    backgroundColor: "#21262E",
    marginRight: 10,
  },
  dollar: {
    color: "#D17842",
    fontSize: 16,
  },
  dollarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingRight: 5,
  },
  price: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  size: {
    color: "white",
    fontWeight: "bold",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingTop: 8,
  },
  multi: {
    fontSize: 24,
    color: "#D17842",
  },
  amount: {
    color: "white",
    fontSize: 20,
    paddingTop: 3,
  },
  total: {
    color: "#D17842",
    fontSize: 20,
    paddingTop: 8,
  },
});
