import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { color, styles } from "../style/Helper";
import Card from "../components/Card";



export default function GameOverScreen({ modal, onNewGame }) {
  return (
    <View>
      <Text>GameOverScreen</Text>
      <Card>
        <Button title="Start Again" onPress={onNewGame}></Button>
      </Card>
    </View>
  );
}

