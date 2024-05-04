import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Favorites from "./screens/Favorites";
import OrderHistory from "./screens/OrderHistory";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarLabelPosition: "beside-icon",
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#D17842",
            tabBarInactiveTintColor: "#52555A",

            tabBarStyle: {
              backgroundColor: "#0d0f14",
              borderTopWidth: 0,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" color={color} size={size} />
              ),
              headerShown: false, // Hide header for Home screen
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="shopping-bag" size={size} color={color} />
              ),
              headerShown: false, // Hide header for Cart screen
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="heart" size={size} color={color} />
              ),
              headerShown: false, // Hide header for Favorites screen
            }}
          />
          <Tab.Screen
            name="OrderHistory"
            component={OrderHistory}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="notifications" size={size} color={color} />
              ),
              headerShown: false, // Hide header for OrderHistory screen
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
