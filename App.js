import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Favorites from "./screens/Favorites";
import OrderHistory from "./screens/OrderHistory";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Details from "./screens/Details";
import Payment from "./screens/Payment";
import LogIn from "./screens/LogIn";
import Signup from "./screens/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./FirebaseConfig";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(false);
  const auth = firebaseAuth;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          {!user ? (
            <>
              <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={Signup}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="HomeTabs"
                component={HomeTabs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Details"
                component={Details}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Payment"
                component={Payment}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const HomeTabs = () => (
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
        headerShown: false,
        tabBarVisible: false,
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="shopping-bag" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="heart" size={size} color={color} />
        ),
        headerShown: false,
        tabBarVisible: false,
      }}
    />
    <Tab.Screen
      name="OrderHistory"
      component={OrderHistory}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="notifications" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
