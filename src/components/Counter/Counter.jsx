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

import { showAlert } from "../../utils/alerts";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [inputToAdd, setInputToAdd] = useState("");

  const incrementCounter = () => {
    const value = Number(inputToAdd);
    if (isNaN(value) || value <= 0) {
      showAlert("Entrada inválida", "Por favor ingresa un número mayor a 0.");
      return;
    }
    dispatch(incrementByAmount(value));
    setInputToAdd("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
          onPress={() => dispatch(decrement())}
          accessibilityRole="button"
          accessibilityLabel="Decrementar contador"
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>

        <Text style={styles.span}>{count}</Text>

        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
          onPress={() => dispatch(increment())}
          accessibilityRole="button"
          accessibilityLabel="Incrementar contador"
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <View style={styles.buttonsContainer}>
        <TextInput
          placeholder="Cantidad a aumentar"
          style={styles.spanInput}
          value={inputToAdd}
          onChangeText={setInputToAdd}
          keyboardType="numeric"
          accessibilityLabel="Cantidad a aumentar"
        />
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
          onPress={incrementCounter}
          accessibilityRole="button"
          accessibilityLabel="Agregar cantidad al contador"
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
        onPress={() => dispatch(reset())}
        accessibilityRole="button"
        accessibilityLabel="Reiniciar contador"
      >
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
};

export default Counter;
