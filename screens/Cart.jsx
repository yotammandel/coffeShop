import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import MenuAndProfile from "../components/MenuAndProfile";
import CartItemWithSizeSelect from "../components/CartItemWithSizeSelect";
import { data } from "../data";
import CartItemOneSize from "../components/CartItemOneSize";
import Pay from "../components/Pay";
export default function Cart() {
  return (
    <View style={styles.container}>
      <MenuAndProfile title="Cart" />
      <ScrollView style={{ backgroundColor: "#0d0f14" }}>
        <CartItemWithSizeSelect item={data.cards1[0]} />
        <CartItemOneSize item={data.cards1[1]} />
        <CartItemOneSize item={data.cards1[2]} />
        <CartItemWithSizeSelect item={data.cards2[0]} />
      </ScrollView>
      <Pay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: "#0d0f14",
    height: "100%",
  },
});
