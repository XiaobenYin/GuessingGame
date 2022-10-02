import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import { color } from "./style/Helper";


export default function Starting({ appName }) {
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
    marginTop: 70,
  },
  border: {
    textAlign: "center",
    color: color.purple,
    fontSize: 20,
    fontWeight: "bold",
    width: 200,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: color.purple,
    borderWidth: 3
  },
  input: {
    borderBottomColor: "#0000231",
    borderBottomWidth: 1,
    margin: 12,
  },
});
