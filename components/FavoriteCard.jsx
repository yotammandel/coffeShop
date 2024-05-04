import { StyleSheet, View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function FavoriteCard({ item, likes }) {
  return (
    <View style={styles.CardContainer}>
      <LinearGradient
        colors={["#252A32", "rgba(38, 43, 51, 0)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.likeIcon}>
              <AntDesign name="heart" size={16} color="#dc3535" />
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.desc}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <AntDesign name="star" size={16} color="#D17842" />
                  <Text style={styles.rating}>4.5</Text>
                  <Text style={styles.likes}>({likes})</Text>
                </View>
              </View>
              <View>
                <View style={styles.ingredientsContainer}>
                  <View style={styles.ingredients}>
                    <Image source={require("../assets/Beans.png")} />
                    <Text style={styles.ingredientText}>Coffee</Text>
                  </View>
                  <View style={styles.ingredients}>
                    <Image source={require("../assets/drop.png")} />
                    <Text style={styles.ingredientText}>Milk</Text>
                  </View>
                </View>
                <View style={styles.roastedContainer}>
                  <Text style={styles.ingredientText}>Medium Roasted</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.paragraph}>
            Cappuccino is a latte made with more foam than steamed milk, often
            with a sprinkle of cocoa powder or cinnamon on top.
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  CardContainer: {
    alignItems: "center",
  },
  gradient: {
    height: 600,
    width: 350,
    borderRadius: 10,
  },
  imgContainer: {
    position: "relative",
  },
  image: {
    width: 350,
    height: 457,
    borderRadius: 10,
  },
  contentContainer: {
    position: "absolute",
    height: 133,
    bottom: 0,
    left: 0,
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContainer: {
    flex: 1,
    marginRight: 10,
    paddingTop: 20,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#AEAEAE",
    fontSize: 14,
  },
  rating: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  likes: {
    color: "#AEAEAE",
    fontSize: 16,
  },
  ingredientsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ingredients: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 50,
    height: 50,
    backgroundColor: "#141921",
    margin: 10,
  },
  ingredientText: {
    color: "#AEAEAE",
    fontSize: 12,
  },
  roastedContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 118,
    height: 50,
    backgroundColor: "#141921",
    marginLeft: 10,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#AEAEAE",
    paddingLeft: 20,
    paddingTop: 20,
  },
  paragraph: {
    color: "white",
    fontSize: 12,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  likeIcon: {
    position: "absolute",
    backgroundColor: "#21262E",
    width: 30,
    height: 30,
    top: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#21262e",
  },
});
