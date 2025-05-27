import { Text, View, Pressable, TextInput } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  incrementByAmount,
  decrement,
  reset,
} from "../../features/Counter/counterSlice";
import { styles } from "./Counter.styles";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [inputToAdd, setInputToAdd] = useState("");

  const incrementCounter = () => {
    dispatch(incrementByAmount(Number(inputToAdd)));
    setInputToAdd("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.span}>{count}</Text>
        <Pressable style={styles.button} onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <TextInput
          placeholder="Cantidad a aumentar"
          style={styles.spanInput}
          value={inputToAdd}
          onChangeText={setInputToAdd}
        />
        <Pressable style={styles.button} onPress={() => incrementCounter()}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <Pressable style={styles.button} onPress={() => dispatch(reset())}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
};

export default Counter;
