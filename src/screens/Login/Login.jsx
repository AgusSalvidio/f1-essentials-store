import { Text, View, Pressable } from "react-native";
import { useState, useEffect } from "react";
import InputForm from "../../components/InputForm/InputForm";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useSignInMutation } from "../../services/authService";
import { setUser } from "../../features/User/userSlice";
import { useDispatch } from "react-redux";
import { styles } from "./Login.styles";
import { useSession } from "../../hooks/useSession";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [triggerSignIn, result] = useSignInMutation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { insertSession } = useSession();

  useEffect(() => {
    if (result.isSuccess) {
      (async () => {
        try {
          await insertSession({
            localId: result.data.localId,
            email: result.data.email,
            token: result.data.idToken,
          });
          dispatch(
            setUser({
              email: result.data.email,
              idToken: result.data.idToken,
              localId: result.data.localId,
            })
          );
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [result]);

  const onSubmit = () => {
    triggerSignIn({ email, password });
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <InputForm label={"Email"} onChange={setEmail} error={""} />
        <InputForm
          label={"Contraseña"}
          onChange={setPassword}
          error={""}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title="Iniciar Sesión" />
        <Text style={styles.sub}>¿No tenés una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={styles.subLink}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
