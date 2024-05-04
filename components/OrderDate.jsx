import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function OrderDate({ date }) {
  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <Text style={styles.title}>Order Date</Text>
        <Text style={{ color: "white" }}>{date}</Text>
      </View>
      <View style={styles.amount}>
        <Text style={styles.title}>Total Amount</Text>
        <Text style={{ color: "#D17842" }}>$74.40</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginHorizontal: 30,
  },
  date: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginHorizontal: 30,
  },
});
