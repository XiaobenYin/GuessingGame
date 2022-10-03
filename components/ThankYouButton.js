import { View, StyleSheet, Button } from "react-native";
import { color } from "../style/Helper";

export default function ThankYouButton({ onGameOver }) {
  return (
    <View styles={styles.container}>
      <Button
        title="Thank you!"
        color={color.confirm}
        onPress={onGameOver}
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
