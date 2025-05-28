import { Alert, Platform } from "react-native";

const isWeb = Platform.OS === "web";

export function showAlert(title, message, onOk) {
  if (isWeb) {
    if (window.confirm(`${title}\n\n${message}`)) {
      onOk && onOk();
    }
  } else {
    Alert.alert(title, message, [{ text: "OK", onPress: onOk }]);
  }
}

export function showConfirm(title, message, onConfirm, onCancel) {
  if (isWeb) {
    if (window.confirm(`${title}\n\n${message}`)) {
      onConfirm && onConfirm();
    } else {
      onCancel && onCancel();
    }
  } else {
    Alert.alert(title, message, [
      { text: "Cancelar", style: "cancel", onPress: onCancel },
      { text: "Eliminar", style: "destructive", onPress: onConfirm },
    ]);
  }
}
