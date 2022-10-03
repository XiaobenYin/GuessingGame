import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "../style/Helper";
import Card from "../components/Card";
import Header from "../components/Header"



export default function GameOverScreen({ modal, onNewGame, onGuessNumber, onTargetNumber }) {
  const notice = "Game is over";
    return (
    <View style={styles.container}>
        <Header appName={notice}/>
      <Card>
        <Button title="Start Again" onPress={onNewGame}></Button>
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
  });
  