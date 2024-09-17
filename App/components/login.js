import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text, Title, IconButton } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("Login button pressed");

    // Validate email and password
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch(
        "https://sanskriti-viharah.onrender.com/memberapi/login",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      if (data.status === "ok") {
        console.log(`Login successful: ${data.status}`);
        Alert.alert("Success", "Login successful!");
        navigation.navigate("Main");
      } else if (data.status === "error") {
        console.log(`Login successful: ${data.status}`);
        Alert.alert("Invalid", `Please relogin..!!`);
      } else {
        console.log(`Login failed: ${data.message}`);
        Alert.alert("Login failed", data.message || "Something went wrong.");
      }
    } catch (error) {
      console.log("Error during login:", error);
      Alert.alert("Error", "An error occurred. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title>
      <TextInput
        label="Email"
        value={email}
        mode="outlined"
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        mode="outlined"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      {/* Social Login Section */}
      <Text style={styles.socialText}>Or Login with</Text>
      <View style={styles.socialContainer}>
        <IconButton
          icon="google"
          size={40}
          style={styles.icon}
          color="#DB4437" // Google red color
          onPress={() => console.log("Google Login")}
        />
        <IconButton
          icon="facebook"
          size={40}
          style={styles.icon}
          color="#3b5998" // Facebook blue color
          onPress={() => console.log("Facebook Login")}
        />
        <IconButton
          icon="twitter"
          size={40}
          style={styles.icon}
          color="#1DA1F2" // Twitter blue color
          onPress={() => console.log("Twitter Login")}
        />
      </View>

      <Text style={styles.text}>
        Don't have an account?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
  text: {
    marginTop: 15,
    textAlign: "center",
  },
  link: {
    color: "blue",
  },
  socialText: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  icon: {
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 4, // To add shadow
  },
});

export default LoginScreen;
