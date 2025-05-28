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
  const { insertSession } = useSession();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const [triggerSignIn, result] = useSignInMutation();

  useEffect(() => {
    if (result.isLoading) {
      setLoading(true);
      setApiError("");
    } else {
      setLoading(false);
    }

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
          setApiError("Error al guardar sesión. Intenta nuevamente.");
        }
      })();
    }

    if (result.isError) {
      const message =
        result.error?.data?.error?.message || "Error en el inicio de sesión.";
      setApiError(message);
    }
  }, [result, dispatch, insertSession]);

  const onChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: "" }));
    setApiError("");
  };

  const validate = () => {
    const errors = {};
    if (!formData.email) errors.email = "Email es requerido";
    if (!formData.password) errors.password = "Contraseña es requerida";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = () => {
    if (!validate()) return;
    triggerSignIn({ email: formData.email, password: formData.password });
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio de Sesión</Text>

        <InputForm
          label="Email"
          value={formData.email}
          onChange={(text) => onChange("email", text)}
          error={formErrors.email}
        />

        <InputForm
          label="Contraseña"
          value={formData.password}
          onChange={(text) => onChange("password", text)}
          error={formErrors.password}
          isSecure
        />

        {apiError ? <Text style={styles.apiError}>{apiError}</Text> : null}

        <SubmitButton
          onPress={onSubmit}
          title={loading ? "Ingresando..." : "Iniciar Sesión"}
          disabled={loading}
        />

        <Text style={styles.sub}>¿No tenés una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={styles.subLink}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
