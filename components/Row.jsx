import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import Card from "../components/Card";

export default function Row({ Cards }) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {Cards.map((item, index) => (
          <Card
            key={index}
            item={item} // Taking price from the first size
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
