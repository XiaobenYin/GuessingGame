import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  SafeAreaView,
} from "react-native";
import Card from "./Card";
import { useState } from "react";
import { color } from "../style/Helper";
import { LinearGradient } from "expo-linear-gradient";

export default function TwoButton({ onContinueGame, onGameOver }) {
  return (
    <View styles={styles.container}>
      <Button title="I am done" color="#8a2be2" onPress={onGameOver}></Button>
      <Button
        title="Let Me Guess Again"
        color="#FF1493"
        onPress={onContinueGame}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 17,
  },
});
