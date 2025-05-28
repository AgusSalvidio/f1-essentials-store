import { Alert, Platform } from "react-native";

const isWeb = Platform.OS === "web";

const safeFunction = (fn) => (typeof fn === "function" ? fn : () => {});

export function showAlert(title, message, onOk) {
  const handleOk = safeFunction(onOk);

  if (isWeb) {
    if (window.confirm(`${title}\n\n${message}`)) {
      handleOk();
    }
  } else {
    Alert.alert(title, message, [{ text: "OK", onPress: handleOk }]);
  }
}

export function showConfirm(title, message, onConfirm, onCancel) {
  const handleConfirm = safeFunction(onConfirm);
  const handleCancel = safeFunction(onCancel);

  if (isWeb) {
    if (window.confirm(`${title}\n\n${message}`)) {
      handleConfirm();
    } else {
      handleCancel();
    }
  } else {
    Alert.alert(title, message, [
      { text: "Cancelar", style: "cancel", onPress: handleCancel },
      { text: "Eliminar", style: "destructive", onPress: handleConfirm },
    ]);
  }
}
