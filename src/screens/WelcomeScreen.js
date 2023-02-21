import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { signInAnonymously } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function WelcomeScreen() {
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInAnonymously(auth);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 100,
      }}
    >
      <Text>Welcome to Anonymous Chat App</Text>
      <Button title="Login to Room" onPress={handleLogin} />
      {loading && <ActivityIndicator size="large" color="green" />}
    </View>
  );
}

const styles = StyleSheet.create({});
