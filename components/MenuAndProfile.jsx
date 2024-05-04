import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import React from "react";

export default function MenuAndProfile({ title }) {
  const handleMenuPress = () => {
    console.log("menu pressed");
  };

  const handleProfilePress = () => {
    console.log("profile pressed");
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleMenuPress}>
        <Image source={require("../assets/menu.png")} />
      </TouchableWithoutFeedback>
      <Text style={styles.text}>{title}</Text>
      <TouchableWithoutFeedback onPress={handleProfilePress}>
        <Image source={require("../assets/Intersect.png")} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
