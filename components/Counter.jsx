import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

const Counter = ({ item, onValueChange, isSingleCounter, isSize }) => {
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    onValueChange(count);
  }, [count]);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => count > 0 && setCount(count - 1);

  const renderPrice = () => (item.price || 0).toFixed(2);

  return (
    <View style={styles.container}>
      <View
        style={
          isSingleCounter ? styles.infoContainerSingle : styles.infoContainer
        }
      >
        <View style={styles.sizeContainer}>
          <Text
            style={
              isSingleCounter
                ? isSize
                  ? styles.sizeSingle
                  : styles.weightSingle
                : isSize
                ? styles.sizeMulti
                : styles.weightMulti
            }
          >
            {item.size || item.weight}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text
            style={isSingleCounter ? styles.priceSingle : styles.priceMulti}
          >
            <Text
              style={
                isSingleCounter
                  ? { color: "#D17842", fontSize: 25 }
                  : { color: "#D17842", fontSize: 22 }
              }
            >
              $
            </Text>{" "}
            {renderPrice()}
          </Text>
        </View>
      </View>
      <View
        style={
          isSingleCounter
            ? styles.counterContainerSingle
            : styles.counterContainer
        }
      >
        <Pressable
          style={styles.countBtn}
          onPress={handleDecrease}
          disabled={count === 0}
        >
          <AntDesign name="minus" size={18} color="white" />
        </Pressable>
        <View style={styles.count}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            {count}
          </Text>
        </View>
        <Pressable style={styles.countBtn} onPress={handleIncrease}>
          <AntDesign name="plus" size={18} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    minWidth: 305,
    maxWidth: 340,
    height: "fit-content",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 150,
    maxWidth: 295,
    marginVertical: 10,
  },
  counterContainerSingle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 170,
    maxWidth: 315,
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 160,
    maxWidth: 295,
  },
  infoContainerSingle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 170,
    maxWidth: 315,
  },
  countBtn: {
    width: 30,
    height: 30,
    backgroundColor: "#D17842",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  count: {
    width: 50,
    height: 35,
    backgroundColor: "#0C0F14",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D17842",
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    maxWidth: 85,
    minWidth: 70,
    height: 35,
    backgroundColor: "#0C0F14",
  },
  sizeSingle: {
    color: "white",
    fontSize: 14,
  },
  sizeMulti: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  weightSingle: {
    color: "#AEAEAE",
    fontSize: 12,
  },
  weightMulti: {
    color: "#AEAEAE",
    fontSize: 12,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "fit-content",
    height: "fit-content",
    // backgroundColor: "red",
    paddingRight: 10,
  },
  priceSingle: {
    fontSize: 25,
    color: "white",
    fontWeight: "400",
    marginHorizontal: 10,
  },
  priceMulti: {
    fontSize: 20,
    color: "white",
    fontWeight: "400",
    marginLeft: 15,
    marginRight: 5,
  },
});
