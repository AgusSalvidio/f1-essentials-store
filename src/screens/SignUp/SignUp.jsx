import { Text, View, Pressable, Image } from "react-native";
import { useEffect, useState } from "react";

import InputForm from "../../components/InputForm/InputForm";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../../services/authService";
import { signupSchema } from "../../validations/authSchema";
import { setUser } from "../../features/User/userSlice";
import { styles } from "./SignUp.styles";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const [triggerSignUp, result] = useSignUpMutation();

  useEffect(() => {
    if (result.isLoading) {
      setLoading(true);
      setApiError("");
    } else {
      setLoading(false);
    }

    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId,
        })
      );
      setFormData({ email: "", password: "", confirmPassword: "" });
      setFormErrors({});
    }

    if (result.isError) {
      const message =
        result.error?.data?.error?.message ||
        "Error en el registro. Intenta de nuevo.";
      setApiError(message);
    }
  }, [result, dispatch]);

  const onChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: "" }));
    setApiError("");
  };

  const onSubmit = () => {
    try {
      setFormErrors({});
      setApiError("");

      signupSchema.validateSync(formData, { abortEarly: false });

      triggerSignUp({
        email: formData.email,
        password: formData.password,
        returnSecureToken: true,
      });
    } catch (validationErrors) {
      if (validationErrors.inner) {
        const errors = {};
        validationErrors.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setFormErrors(errors);
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/icon.png")}
          style={styles.iconImage}
          resizeMode="contain"
        />
        <Text style={styles.title}>Registrarse</Text>

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

        <InputForm
          label="Confirmar contraseña"
          value={formData.confirmPassword}
          onChange={(text) => onChange("confirmPassword", text)}
          error={formErrors.confirmPassword}
          isSecure
        />

        {apiError ? <Text style={styles.apiError}>{apiError}</Text> : null}

        <SubmitButton
          onPress={onSubmit}
          title={loading ? "Registrando..." : "Registrarse"}
          disabled={loading}
        />

        <Text style={styles.sub}>¿Ya tenés una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.subLink}>Inicia Sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
