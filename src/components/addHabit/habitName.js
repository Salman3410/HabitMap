import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HabitName({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Habit Name"
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
    backgroundColor: "#eee",
    borderColor: "#ccc",
  },
  input: {},
});
