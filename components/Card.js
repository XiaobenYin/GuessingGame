import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function Card({}) {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>Enter a Number</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => {
          setText(newText);
        }}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.cancelButton}>
          <Button
            title="Reset"
            color="#8a2be2"
            onPress={() => {
              onCancel();
            }}
          />
        </View>
        <View style={styles.confirmButton}>
          <Button
            title="Confirm"
            color="#FF1493"
            onPress={() => {
              onAdd(text);
              setText = "";
            }}
            //disabled={text.length == 0 ? true : false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    height: 200,
    width: 280,
    borderRadius: 10,
    backgroundColor: "rgb(59,6,33)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.15,
    elevation: 10,
    shadowColor: "grey",
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
  instruction: {
    marginTop: 40,
    color: "gold",
    fontSize: 20,
  },
  input: {
    marginTop: 30,
    width: 60,
    borderBottomColor: "gold",
    borderBottomWidth: 2,
    margin: 12,
  },
});
