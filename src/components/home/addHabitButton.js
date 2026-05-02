import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function AddHabitButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.fab} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.plus}>＋</Text>
      <Text style={styles.label}>New Habit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#7B9",
    elevation: 5,
  },

  plus: {
    color: "#fff",
    fontSize: 18,
    marginRight: 8,
  },

  label: {
    color: "#fff",
    fontSize: 14,
  },
});
