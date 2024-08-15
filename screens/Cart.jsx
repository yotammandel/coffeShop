import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import CartItem from "../components/CartItem";
import MenuAndProfile from "../components/MenuAndProfile";
import CheckOut from "../components/CheckOut";
import { data } from "../data";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const [cartItems, setCartItems] = useState(data.cards1);
  const navigation = useNavigation();

  const handlePress = () => {
    const price = getTotalAmount();
    navigation.navigate("Payment", { price });
  };

  const handleValueChange = (itemId, sizeOrWeightId, newCount) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.sizes) {
          item.sizes = item.sizes.map((size) =>
            size.id === sizeOrWeightId ? { ...size, count: newCount } : size
          );
        } else if (item.weight) {
          item.weight = item.weight.map((weight) =>
            weight.id === sizeOrWeightId
              ? { ...weight, count: newCount }
              : weight
          );
        }
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const getTotalAmount = () =>
    cartItems.reduce(
      (total, item) =>
        total +
        (item.sizes
          ? item.sizes.reduce((sum, size) => sum + size.count * size.price, 0)
          : item.weight
          ? item.weight.reduce(
              (sum, weight) => sum + weight.count * weight.price,
              0
            )
          : 0),
      0
    );

  return (
    <View style={styles.container}>
      <MenuAndProfile title={"Cart"} />
      <ScrollView style={styles.ScrollContainer}>
        <View style={[styles.cartItemContainer]}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onValueChange={handleValueChange}
            />
          ))}
        </View>
      </ScrollView>
      <CheckOut
        totalPrice={getTotalAmount()}
        handlePress={handlePress}
        title={"Pay"}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0C0F14",
  },
  scrollContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0C0F14",
  },
  cartItemContainer: {
    flex: 1,
    alignItems: "center",
  },
});
