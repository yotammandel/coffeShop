import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { data } from "../data";

export default function FilterList({ setFilteredItems }) {
  const [selected, setSelected] = useState("All");

  const categories = [
    "All",
    "Cappuccino",
    "Espresso",
    "Americano",
    "Macchiato",
  ];

  function handlePress(category) {
    if (category.toLowerCase() === "all") {
      setFilteredItems(data.cards1.concat(data.cards2));
      setSelected(category);
    } else {
      const filtered = data.cards1
        .concat(data.cards2)
        .filter((item) =>
          item.title.toLowerCase().includes(category.toLowerCase())
        );
      setFilteredItems(filtered);
      setSelected(category);
    }
  }

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              onPress={() => handlePress(category)}
              key={category}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={[
                    styles.Text,
                    selected === category && {
                      color: "#D17842",
                      fontWeight: "bold",
                    },
                  ]}
                >
                  {category}
                </Text>
                {selected === category && (
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: "#D17842",
                      marginTop: 2,
                    }}
                  />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    columnGap: 20,
  },
  Text: {
    color: "#535559",
    fontWeight: "700",
  },
});
