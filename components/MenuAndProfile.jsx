import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { firebaseAuth } from "../FirebaseConfig";

export default function MenuAndProfile({ title }) {
  const auth = firebaseAuth;
  const [userName, setUserName] = useState("");
  const [userIcon, setUserIcon] = useState("");

  useEffect(() => {
    setUserName(auth.currentUser ? auth.currentUser.displayName : "");
    setUserIcon(userName ? userName.charAt(0).toUpperCase() : "");
  }, [userName]);

  const handleProfilePress = () => {
    console.log("profile pressed");
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleProfilePress}>
        {userIcon ? (
          <View style={styles.userIcon}>
            <Text style={styles.userInitial}>{userIcon}</Text>
          </View>
        ) : (
          <Image source={require("../assets/Intersect.png")} />
        )}
      </TouchableWithoutFeedback>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={{ width: 50 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 40,
    paddingBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D17842",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  userInitial: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
