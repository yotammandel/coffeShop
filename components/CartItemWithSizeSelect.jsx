import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import PriceAndCount from "./PriceAndCount";

export default function CartItemWithSizeSelect({ item }) {
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
            <View style={styles.roastedContainer}>
              <Text
                style={{
                  color: "#AEAEAE",
                  fontSize: 10,
                  fontWeight: "600",
                }}
              >
                Medium Roasted
              </Text>
            </View>
          </View>
        </View>
        <PriceAndCount size={item.sizeS} price={item.price} />
        <PriceAndCount size={item.sizeM} price={item.price} />
        <PriceAndCount size={item.sizeL} price={item.price} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    marginTop: 20,
    marginLeft: 30,
    height: 250,
    width: 330,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  image: {
    height: 100,
    width: 100,
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
    gap: 30,
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
});
