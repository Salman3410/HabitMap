import { StyleSheet, Text, View } from "react-native";

export default function AddHabit() {
  return (
    <View style={styles.container}>
      <Text>New Habit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
