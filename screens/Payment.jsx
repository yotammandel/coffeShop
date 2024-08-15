import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Credit from "../components/Credit";
import PaymentMethod from "../components/PaymentMethod";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CheckOut from "../components/CheckOut";

export default function Payment({ route }) {
  const { price } = route.params;
  const [selectedMethod, setSelectedMethod] = useState("Credit");
  const navigation = useNavigation();

  const methods = [
    { title: "Wallet", image: require("../assets/wallet.png"), price: 100.5 },
    {
      title: "Google Pay",
      image: require("../assets/googlePay.png"),
      price: null,
    },
    {
      title: "Apple Pay",
      image: require("../assets/applePay.png"),
      price: null,
    },
    {
      title: "Amazon Pay",
      image: require("../assets/amazonPay.png"),
      price: null,
    },
  ];

  const handlePress = (method) => {
    setSelectedMethod(method);
  };
  const ProcessPayment = () => {
    console.log("Payment processed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.NavIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              weight={"bold"}
              size={16}
              color="#AEAEAEAE"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Payment</Text>
        <View style={{ width: 30 }} />
      </View>
      <TouchableOpacity
        onPress={() => handlePress("Credit")}
        style={[
          styles.creditContainer,
          selectedMethod === "Credit" && styles.creditPressed,
        ]}
      >
        <Credit Name="John Doe" Expiry="12/24" />
      </TouchableOpacity>
      {methods.map((method, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(method.title)}
          style={[
            styles.methodContainer,
            selectedMethod === method.title && styles.methodPressed,
          ]}
        >
          <PaymentMethod
            price={method.price}
            title={method.title}
            image={method.image}
          />
        </TouchableOpacity>
      ))}
      <View style={styles.paymentContainer}>
        <CheckOut
          title={selectedMethod}
          totalPrice={price}
          handlePress={ProcessPayment}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C0F14",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
  },
  creditContainer: {
    width: 340,
    height: 245,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#262B32",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  creditPressed: {
    borderColor: "#D17842",
  },
  methodContainer: {
    width: "80%",
    marginTop: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#262B32",
  },
  methodPressed: {
    borderColor: "#D17842",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    paddingHorizontal: 40,
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "center",
  },
  NavIcon: {
    backgroundColor: "#21262E",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#21262e",
  },
  paymentContainer: {
    position: "absolute",
    bottom: 30,
  },
});
