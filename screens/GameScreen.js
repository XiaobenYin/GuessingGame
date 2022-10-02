import { Text, View, StyleSheet } from "react-native";
import Card from "../components/Card";

function GameScreen( {onGuessNumber, onTargetNumber} ) {
  return (
    <View>
      <Text>GameScreen!</Text>
      <Card>
        <Text style={styles.instruction}>
            You have chosen {onTargetNumber}</Text>
      </Card>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  instruction: {
    marginTop: 40,
    color: "gold",
    fontSize: 20,
  },
});
