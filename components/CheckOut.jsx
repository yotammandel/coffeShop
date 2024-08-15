import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CheckOut = ({ totalPrice, handlePress, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Text style={{ color: "#AEAEAE", fontSize: 12 }}>Total Price</Text>
        <Text style={styles.price}>
          <Text style={[styles.price, { color: "#D17842" }]}>$ </Text>
          {totalPrice.toFixed(2)}
        </Text>
      </View>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#0d0f14",
    paddingTop: 5,
  },
  totalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    rowGap: 5,
    width: 130,
    paddingLeft: 15,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    marginRight: 10,
    height: 60,
    backgroundColor: "#D17842",
    borderRadius: 15,
    alignSelf: "flex-end",
  },
  price: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },
});
