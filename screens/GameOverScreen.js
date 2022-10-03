import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import { color } from "../style/Helper";
import Card from "../components/Card";
import Header from "../components/Header";

function winOrNot(guess, target) {
  if (guess != target) {
    return (
      <Image
        style={styles.tinyLogo}
        source={require("../assets/Sad-emoji.png")}
      />
    );
  } else {
    return (
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://picsum.photos/id/" + target + "/100/100",
        }}
      />
    );
  }
}

export default function GameOverScreen({
  modal,
  onNewGame,
  onGuessNumber,
  onTargetNumber,
}) {
  const notice = "Game is over";
  const img = winOrNot(onGuessNumber, onTargetNumber);
  return (
    <View style={styles.container}>
      <Header appName={notice} />
      <Card>
        <Text style={styles.instruction}>Here's your picture</Text>
        {img}
        <Button
          title="Start Again"
          color={color.confirm}
          onPress={onNewGame}
        ></Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30,
  },
  tinyLogo: {
    marginTop: 20,
    marginBottom: 10,
    width: 80,
    height: 80,
  },
  instruction: {
    marginTop: 10,
    color: color.gold,
    fontSize: 20,
  },
});
