import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Counter from "./Counter";
import { LinearGradient } from "expo-linear-gradient";

const CartItem = ({ item, onValueChange }) => {
  const counters = item.sizes || item.weight;
  const isSingleCounter = counters.length === 1;
  const isSize = !!item.sizes;

  return (
    <LinearGradient
      colors={["#252A32", "rgba(38, 43, 51, 0)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.topContainer}>
        <Image
          style={counters.length === 1 ? styles.imageSingle : styles.imageMulti}
          source={{ uri: item.image }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          {counters.length > 1 && (
            <View style={styles.tag}>
              <Text style={{ color: "#AEAEAE", fontSize: 12 }}>
                Medium Roasted
              </Text>
            </View>
          )}
          <View style={styles.counterContainer}>
            {isSingleCounter && (
              <Counter
                item={counters[0]}
                onValueChange={(newCount) =>
                  onValueChange(item.id, counters[0].id, newCount)
                }
                isSingleCounter={true}
                isSize={isSize}
              />
            )}
          </View>
        </View>
      </View>
      {counters.length > 1 && (
        <View style={styles.bottomContainer}>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              item={counter}
              onValueChange={(newCount) =>
                onValueChange(item.id, counter.id, newCount)
              }
              isSingleCounter={false}
              isSize={isSize}
            />
          ))}
        </View>
      )}
    </LinearGradient>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  gradient: {
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  topContainer: {
    flexDirection: "row",
    width: "100%",
    alignSelf: "stretch",
    paddingHorizontal: 15,
    paddingTop: 15,
    marginBottom: 5,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  bottomContainer: {
    width: "100%",
    alignSelf: "stretch",
    paddingHorizontal: 15,
  },
  counterContainer: {
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "semibold",
    color: "#fff",
    marginBottom: 3,
  },
  desc: {
    color: "#AEAEAE",
    fontSize: 14,
    marginBottom: 10,
  },
  tag: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 120,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#0C0F14",
  },
  imageMulti: {
    width: 130,
    height: 130,
    borderRadius: 10,
    marginRight: 10,
  },
  imageSingle: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
});
