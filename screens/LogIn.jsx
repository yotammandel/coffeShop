import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { firebaseAuth } from "../FirebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Feather } from "@expo/vector-icons";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const auth = firebaseAuth;
  const navigation = useNavigation();

  const LogIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch {
      alert("Invalid email or password");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Image style={styles.img} source={require("../assets/logo.png")} />
        <Text style={styles.text}>LogIn</Text>
        <TextInput
          value={email}
          placeholder="Email"
          placeholderTextColor="#6D757D"
          style={[
            styles.input,
            selectedInput === "email" && styles.inputSelected,
          ]}
          onFocus={() => setSelectedInput("email")}
          onBlur={() => setSelectedInput(null)}
          onChangeText={(text) => setEmail(text)}
          textContentType="oneTimeCode"
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            value={password}
            placeholder="Password"
            placeholderTextColor="#6D757D"
            style={[
              styles.passwordInput,
              selectedInput === "password" && styles.inputSelected,
            ]}
            secureTextEntry={!isPasswordVisible}
            onFocus={() => setSelectedInput("password")}
            onBlur={() => setSelectedInput(null)}
            onChangeText={(text) => setPassword(text)}
            textContentType="oneTimeCode"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Feather
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={16}
              color="#6D757D"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={LogIn}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F14",
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1E1F21",
    color: "white",
    height: 40,
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  passwordInputContainer: {
    position: "relative",
    width: "100%",
  },
  passwordInput: {
    backgroundColor: "#1E1F21",
    color: "white",
    height: 40,
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  inputSelected: {
    borderWidth: 2,
    borderColor: "#D17842",
  },
  loginButton: {
    backgroundColor: "#D17842",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 60,
    marginTop: 20,
  },
  signupButton: {
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  img: {
    width: 150,
    height: 150,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 10,
  },
});
