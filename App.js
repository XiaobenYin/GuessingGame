import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Starting from "./components/Starting";
import Card from "./components/Card";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "./style/Helper";
import StartGameScreen from "./screens/StartGameScreen";
import React, { useState } from "react";

export default function App() {
  // const [modalVisible, setModalVisible] = useState(false);
  // const makeModalVisible = () => {
  //   setModalVisible(true);
  // };
  // const makeModalInvisible = () => {
  //   setModalVisible(false);
  // };
  const name = "Guess My Number";

  return (
    <LinearGradient
      colors={[color.bg1, color.bg2]}
      style={styles.container}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <SafeAreaView style={styles.container}>
        <View>
          <Starting appName={name} />
          <StartGameScreen />

          {/* <Card /> */}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
