import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import CheckOut from "./CheckOut";

const PaymentMethod = ({ price, title, image }) => {
  return (
    <LinearGradient
      colors={["#252A32", "rgba(38, 43, 51, 0)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View
        style={{ width: 30, justifyContent: "center", alignItems: "center" }}
      >
        <Image source={image} style={{ size: 30 }} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.priceContainer}>
        <Text style={price ? styles.priceText : styles.noPriceText}>
          $ {price}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 10,
    flex: 1,
  },
  priceContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  priceText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  noPriceText: {
    opacity: 0,
  },
});
