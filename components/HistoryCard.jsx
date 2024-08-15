import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import SizeAndAmount from "./SizeAndAmount";
export default function HistoryCard({ item }) {
  if (!item) {
    return null;
  }

  const imageUrl = item.image || "";

  const title = item.title || "Default Title";
  const description = item.desc || "Default Description";

  const sizes = item.sizes ? item.sizes : item.weight;

  return (
    <LinearGradient
      colors={["#252A32", "rgba(38, 43, 51, 0)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View>
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.dollarContainer}>
            <Text style={styles.dollar}>$</Text>
            <Text style={styles.price}>37.2</Text>
          </View>
        </View>

        {sizes.map((size, index) => (
          <SizeAndAmount
            key={index}
            size={size.size}
            price={parseFloat(size.price).toFixed(1)}
            amount={2}
            total={size.price * 2}
          />
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    marginTop: 20,
    marginLeft: 30,
    paddingBottom: 20,
    marginBottom: 10,
    width: 330,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  image: {
    height: 60,
    width: 60,
    alignSelf: "flex-start",
    marginTop: 15,
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
    alignItems: "center",
    gap: 30,
  },
  dollar: {
    color: "#D17842",
    fontSize: 20,
  },
  dollarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
});
