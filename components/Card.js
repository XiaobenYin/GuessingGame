import { View, StyleSheet } from "react-native";
import React from "react";

export default function Card(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    height: 200,
    width: 280,
    borderRadius: 10,
    backgroundColor: "rgb(59,6,33)",
    shadowRadius: 10,
    shadowOpacity: 0.15,
    elevation: 10,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
  },
});
