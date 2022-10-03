import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  SafeAreaView,
} from "react-native";
import Card from "../components/Card";
import { color } from "../style/Helper";
import { LinearGradient } from "expo-linear-gradient";
import TwoButton from "../components/TwoButton";
import ThankYouButton from "../components/ThankYouButton";

function message(guess, target) {
  if (guess < target) {
    return <Text>That's not my number!{"\n"}Guess higher!</Text>;
  } else if (guess > target) {
    return <Text>That's not my number!{"\n"}Guess lower!</Text>;
  } else {
    return "Congrats! You won!";
  }
}

export default function GameScreen({
  onGuessNumber,
  onTargetNumber,
  modal,
  onContinueGame,
  onGameOver,
}) {
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
          <View style={styles.inputContainer}>
            <Card>
              <Text style={styles.instruction}>
                You have chosen {onGuessNumber}
                {"\n"}
                {notes}
              </Text>
              <View style={styles.button}>
                {notes !== "Congrats! You won!" ? (
                  <TwoButton
                    onContinueGame={onContinueGame}
                    onGameOver={onGameOver}
                  />
                ) : (
                  <ThankYouButton onGameOver={onGameOver} />
                )}
              </View>
            </Card>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    padding: 16,
    marginTop: 175,
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
