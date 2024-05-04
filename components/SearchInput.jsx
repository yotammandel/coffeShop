import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function SearchInput({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <SimpleLineIcons
        name="magnifier"
        size={20}
        color="#52555A"
        style={styles.icon}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={"#52555A"}
        placeholder=" Find Your Coffee..."
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#141921",
    height: 45,
    width: 330,
    borderRadius: 15,
    marginLeft: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  icon: {
    marginRight: 10,
  },
});
