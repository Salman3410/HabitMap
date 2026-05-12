import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AddButton({ onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.button}>Create</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7B9",
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 120,
    elevation: 2,
  },
  button: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 18,
  },
});
