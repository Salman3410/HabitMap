import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HabitContext } from "../../context/habitContext";

export default function SnapShotBox() {
  const { habits } = useContext(HabitContext);

  const totalHabits = habits.length;

  const completedTargets = habits.filter(
    (habit) => habit.count >= habit.target,
  ).length;
  return (
    <View style={styles.snapshotBox}>
      <Text style={styles.topText}>Today's Snapshot</Text>
      <Text numberOfLines={2} style={styles.count}>
        {completedTargets} of {totalHabits} habits completed
      </Text>
      <Text style={styles.motivate}>You still have time.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  snapshotBox: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    borderColor: "#ccc",
    width: "90%",
    alignSelf: "center",
  },
  topText: {},
  count: {
    fontSize: 20,
  },
  motivate: {
    marginTop: 20,
  },
});
