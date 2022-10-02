import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "./style/Helper";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import React, { useState } from "react";

const getRandomNumber = () => {
  const min = 1020;
  const max = 1029;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

export default function App() {
  const [target, setTarget] = useState(getRandomNumber());
  const [guess, setGuess] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const newGame = () => {
    setTarget(getRandomNumber());
    setGuess(null);
    setGameStart(false);
    setGameOver(false);
  };

  function userGuessHandler(userGuess) {
    setGuess(userGuess);
  }

  let screen = <StartGameScreen onGuessNumber={userGuessHandler} />;
  if (guess) {
    screen = <GameScreen onGuessNumber={userGuessHandler} onTargetNumber={target}/>;
  }

  const startNewGame = (userGuess) => {
    setGameOver(false);
    setGameStart(true);
    setGuess(userGuess);
  };

  const endGame = () => {
    setGameOver(true);
    setGameStart(false);
  };

  // const [modalVisible, setModalVisible] = useState(false);
  // const makeModalVisible = () => {
  //   setModalVisible(true);
  // };
  // const makeModalInvisible = () => {
  //   setModalVisible(false);
  // };


  return (
    <LinearGradient
      colors={[color.bg1, color.bg2]}
      style={styles.container}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <SafeAreaView style={styles.container}>

        <View>
          {screen}

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
