import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  SafeAreaView,
} from "react-native";
import Card from "../components/Card";
import { useState } from "react";
import { color } from "../style/Helper";
import { LinearGradient } from "expo-linear-gradient";

function message(guess, target) {
  if (guess < target) {
    return <Text>That's not my number!{"\n"}Guess higher!</Text>;
  } else if (guess > target) {
    return <Text>That's not my number!{"\n"}Guess lower!</Text>;
  } else {
    return <Text>You won!</Text>;
  }
}

function GameScreen({ onGuessNumber, onTargetNumber, modal, onContinueGame, onGameOver }) {
  const notes = message(onGuessNumber, onTargetNumber);
  return (
    <Modal visible={modal} statusBarTranslucent={true}>
      <LinearGradient
        colors={[color.bg1, color.bg2]}
        style={styles.container}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <SafeAreaView style={styles.container}>
          <View>
            <Card>
              <Text style={styles.instruction}>
                You have chosen {onGuessNumber}
                {"\n"}
                {notes}
              </Text>
              <View style={styles.button}>
                <Button title="I am done" color="#8a2be2" onPress={onGameOver}></Button>
                <Button
                  title="Let Me Guess Again"
                  color="#FF1493"
                  onPress={onContinueGame}
                ></Button>
              </View>
            </Card>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </Modal>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  instruction: {
    textAlign: "center",
    marginTop: 20,
    color: color.gold,
    fontSize: 20,
    flexWrap: "wrap",
  },
  button: {
    marginTop: 17,
  },
});
