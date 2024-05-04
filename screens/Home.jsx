import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MenuAndProfile from "../components/MenuAndProfile";
import SearchInput from "../components/SearchInput";
import { data } from "../data";
import Row from "../components/Row";
import FilterList from "../components/FilterList";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(
    data.cards1.concat(data.cards2)
  );

  const handleSearch = (text) => {
    setSearchValue(text);
    const filtered = data.cards1
      .concat(data.cards2)
      .filter((item) => item.title.toLowerCase().includes(text.toLowerCase()));
    setFilteredItems(filtered);
  };

  return (
    <View style={styles.container}>
      <MenuAndProfile title=" " />
      <ScrollView style={{ backgroundColor: "#0d0f14" }}>
        <Text style={styles.text}>Find the best coffee for you</Text>
        <SearchInput value={searchValue} onChangeText={handleSearch} />
        <FilterList setFilteredItems={setFilteredItems} />
        {filteredItems.length === 0 ? (
          <Text style={styles.noResultsText}>Nothing to show</Text>
        ) : (
          <Row Cards={filteredItems} />
        )}
        <Text style={styles.beansText}>Coffee beans</Text>
        <Row Cards={data.cards2} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    width: "70%",
    padding: 20,
  },
  container: {
    paddingTop: 60,
    backgroundColor: "#0d0f14",
    height: "100%",
  },
  beansText: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
    paddingLeft: 27,
    paddingTop: 15,
  },
  noResultsText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
});
