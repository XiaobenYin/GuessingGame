import { TextInput, View, Text, Alert, Button } from "react-native";
import { StyleSheet } from "react-native";
import Card from "../components/Card";
import { useState } from "react";
import Header from "../components/Header";
import { color } from "./style/Helper";



function StartGameScreen({ onGuessNumber }) {
  const name = "Guess My Number";
  const [text, setText] = useState("");
  const resetHandler = () => {
    setText("");
  };
  function confirmHandler() {
    const inputNumber = parseInt(text);
    if (isNaN(inputNumber) || inputNumber < 1020 || inputNumber > 1029) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a numebr between 1020 and 1029",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }]
      );
      return;
    }
    onGuessNumber(inputNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <Header appName={name} />
      <Card>
        <Text style={styles.instruction}>Enter a Number</Text>
        <TextInput
          style={styles.input}
          value={text}
          keyboardType="phone-pad"
          onChangeText={(newText) => {
            setText(newText);
          }}
        />
        <TextInput />
        <View style={styles.buttonsContainer}>
          <View style={styles.cancelButton}>
            <Button title="Reset" color="#8a2be2" onPress={resetHandler} />
          </View>
          <View style={styles.confirmButton}>
            <Button title="Confirm" color="#FF1493" onPress={confirmHandler} />
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  instruction: {
    marginTop: 40,
    color: color.gold,
    fontSize: 20,
  },
  inputContainer: {
    flex: 1,
    padding: 16,
    marginTop: 30,
  },
  cancelButton: {
    margin: 5,
    width: "30%",
    color: "#8a2be2",
  },
  confirmButton: {
    margin: 5,
    width: "30%",
  },
  buttonsContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  input: {
    marginTop: 30,
    width: 60,
    borderBottomColor: color.gold,
    borderBottomWidth: 2,
    margin: 12,
    color: color.gold,
    fontSize: 18,
    textAlign: "center",
  },
});
