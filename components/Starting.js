import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";

export default function Starting({ appName }) {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.border}>{appName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    textAlign: "center",
    color: "purple",
    fontSize: 16,
    width: 180,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input: {
    borderBottomColor: "#0000231",
    borderBottomWidth: 1,
    margin: 12,
  },
});
