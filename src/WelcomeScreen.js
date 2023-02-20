import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getAuth, signInAnonymously } from "firebase/auth";
import { auth } from "../firebaseConfig";

// const auth = getAuth();
// signInAnonymously(auth)
//   .then(() => {
//     // Signed in..
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ...
//   });

export default function WelcomeScreen() {
  //login user anonymously with firebase

  const handleLogin = async () => {
    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View
      style={{
        justifyContent: "center",
        marginVertical: 100,
      }}
    >
      <Text>Welcome to Chat App</Text>
      <Button title="Login to chat" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({});
