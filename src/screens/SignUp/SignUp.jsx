import { Text, View, Pressable } from "react-native";
import { useEffect, useState } from "react";

import InputForm from "../../components/InputForm/InputForm";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../../services/authService";
import { signupSchema } from "../../validations/authSchema";
import { setUser } from "../../features/User/userSlice";
import { styles } from "./SignUp.styles";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const [triggerSignUp, result] = useSignUpMutation();

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
        })
      );
    }
  }, [result]);

  const onSubmit = () => {
    try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");
      signupSchema.validateSync({ email, password, confirmPassword });
      triggerSignUp({ email, password, returnSecureToken: true });
    } catch (err) {
      console.log(err);
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "pasword":
          setErrorPassword(err.message);
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        <InputForm label={"Email"} onChange={setEmail} error={errorMail} />
        <InputForm
          label={"Contraseña"}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <InputForm
          label={"Confirmar contraseña"}
          onChange={setconfirmPassword}
          error={errorConfirmPassword}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title="Registrarse" />
        <Text style={styles.sub}>¿Ya tenés una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.subLink}>Inicia Sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
