import {
  View,
  StyleSheet,
  Button,
} from "react-native";

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
