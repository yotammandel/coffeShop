import { StyleSheet, View, ScrollView, Text } from "react-native";
import React from "react";
import MenuAndProfile from "../components/MenuAndProfile";
import OrderDate from "../components/OrderDate";
import HistoryCard from "../components/HistoryCard";
import { data } from "../data";

export default function OrderHistory() {
  return (
    <View style={styles.container}>
      <MenuAndProfile title={"Order History"} />
      <OrderDate date={"20th March 16.3"} />
      <ScrollView>
        <HistoryCard item={data.cards1[0]} />
        <HistoryCard item={data.cards2[0]} />
        <OrderDate date={"19th March 2023 "} />
        <HistoryCard item={data.cards1[1]} />
      </ScrollView>
      <View style={styles.downloadButton}>
        <Text style={styles.download}>Download</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: "#0d0f14",
    height: "100%",
  },
  downloadButton: {
    width: 330,
    height: 60,
    backgroundColor: "#D17842",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  download: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
