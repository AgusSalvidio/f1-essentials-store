import { Text, TextInput, View } from "react-native";
import { useState } from "react";
import { styles } from "./InputForm.styles";

const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
  const [input, setInput] = useState("");

  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;
