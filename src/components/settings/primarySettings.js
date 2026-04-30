import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons/";

export default function PrimarySettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>App Settings</Text>

      <View style={styles.options}>
        <View style={styles.row}>
          <AntDesign name="font-size" size={20} color="black" />
          <Text style={styles.optionText}>Font Style</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>Host Grotesk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    color: "#555",
    fontSize: 16,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: "#7B9",
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  optionText: {
    fontSize: 16,
  },
  button: {},
  buttonText: {},
});
