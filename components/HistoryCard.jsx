import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import SizeAndAmount from "./SizeAndAmount";

export default function HistoryCard({ item }) {
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
          </View>
          <View style={styles.dollarContainer}>
            <Text style={styles.dollar}>$</Text>
            <Text style={styles.price}>37.2</Text>
          </View>
        </View>
        <SizeAndAmount
          size={item.sizeS}
          price={item.price}
          amount={2}
          total={8.12}
        />
        <SizeAndAmount
          size={item.sizeM}
          price={parseFloat(item.price) + 2}
          amount={3}
          total={11.1}
        />
        <SizeAndAmount
          size={item.sizeL}
          price={parseFloat(item.price) + 4}
          amount={2}
          total={parseFloat(item.price) * 2}
        />
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
