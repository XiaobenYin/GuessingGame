import {
  View,
  StyleSheet,
  Button,
} from "react-native";
import { color } from "../style/Helper";

export default function TwoButton({ onContinueGame, onGameOver }) {
  return (
    <View styles={styles.container}>
      <Button title="I am done" color={color.reset} onPress={onGameOver}></Button>
      <Button
        title="Let Me Guess Again"
        color={color.confirm}
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
