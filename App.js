import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "./style/Helper";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import React, { useState } from "react";

const getRandomNumber = () => {
  const min = 1020;
  const max = 1029;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [target, setTarget] = useState(getRandomNumber());
  const [guess, setGuess] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const makeModalVisible = () => {
    setModalVisible(true);
  };
  const makeModalInvisible = () => {
    setModalVisible(false);
  };

  const newGame = () => {
    setTarget(getRandomNumber());
    setGuess(null);
    setGameOver(false);
  };

  function userGuessHandler(userGuess) {
    setGuess(userGuess);
    makeModalVisible();
    setGameOver(false);
  }

  const gameContinue = () => {
    makeModalInvisible();
    setGameOver(false);
  };

  const gameIsOver = () => {
    setGameOver(true);
    makeModalInvisible();
  };


  let screen = <StartGameScreen onGuessNumber={userGuessHandler} />;
  if (modalVisible) {
    screen = (
      <GameScreen
        modal={modalVisible}
        onGuessNumber={guess}
        onTargetNumber={target}
        onContinueGame={gameContinue}
        onGameOver={gameIsOver}
      />
    );
  } else if (gameOver) {
    screen = <GameOverScreen modal={modalVisible} onNewGame={newGame} onGuessNumber={guess} onTargetNumber={target}/>;
  }

  // const startNewGame = (userGuess) => {
  //   setGameOver(false);
  //   setGameStarted(true);
  //   setGuess(userGuess);
  // };

  // const endGame = () => {
  //   setGameOver(true);
  //   setGameStarted(false);
  // };

  return (
    <LinearGradient
      colors={[color.bg1, color.bg2]}
      style={styles.container}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <SafeAreaView style={styles.container}>
        <View>{screen}</View>
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
