import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Increment" onPress={increment} />
        <View style={styles.buttonGap} />
        <Button style={styles.button} title="Decrement" onPress={decrement} />
        <View style={styles.buttonGap} />
        <Button style={styles.button} title="Reset" onPress={reset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  countText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20
  },
  buttonGap: {
    width: 10 // Adjust the width to control the gap size
  }
});
