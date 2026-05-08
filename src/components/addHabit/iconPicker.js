import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function IconPicker() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="run" size={32} color="black" />
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <MaterialCommunityIcons name="pencil" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  icon: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#ccc",
  },
  button: {
    position: "absolute",
    bottom: 10,
    right: 110,
    width: 30,
    height: 30,
    backgroundColor: "#7B9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
