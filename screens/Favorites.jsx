import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import MenuAndProfile from "../components/MenuAndProfile";
import FavoriteCard from "../components/FavoriteCard";
import { data } from "../data";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <MenuAndProfile title="Favorites" />
      <ScrollView style={{ backgroundColor: "#0d0f14" }}>
        <FavoriteCard item={data.cards1[0]} likes={1234} />
        <FavoriteCard item={data.cards1[0]} likes={1234} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  container: {
    paddingTop: 50,
    backgroundColor: "#0d0f14",
    height: "100%",
  },
});
