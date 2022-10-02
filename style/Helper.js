import { StyleSheet } from "react-native";

const color = {
    bg1: "#9932cc",
    bg2: "white",
    cardbg: "rgb(59,6,33)",
    note: "#ffa500",
    purple: "#7b68ee",
    pink: "#ff00ff",
    gold: "gold",
}

const height = {
  initialHeight: 200,
  gameHeight: 300,
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

export {color, height, styles}