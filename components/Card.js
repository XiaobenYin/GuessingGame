import { View, StyleSheet } from "react-native";
import React from "react";
import { color } from "../style/Helper";



export default function Card(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
    height: 200,
    width: 280,
    borderRadius: 10,
    backgroundColor: color.cardbg,
    shadowRadius: 10,
    shadowOpacity: 0.15,
    elevation: 10,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
  },
});
