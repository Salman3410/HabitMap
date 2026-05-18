import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HabitContext } from "../../context/habitContext";

export default function Dashboard() {
  const { habits } = useContext(HabitContext);

  const totalHabits = habits.length;

  const totalDone = habits.reduce((acc, habit) => acc + (habit.count || 0), 0);

  const completedTargets = habits.filter(
    (habit) => habit.count >= habit.target,
  ).length;

  const OPTIONS = [
    { id: 1, title: "Done", count: totalDone },
    { id: 2, title: "Target", count: completedTargets },
    { id: 3, title: "Habits", count: totalHabits },
  ];
  return (
    <View style={styles.container}>
      {OPTIONS.map((item) => (
        <View style={styles.innerContainer} key={item.id}>
          <Text style={styles.count}>{item.count}</Text>
          <Text style={styles.option}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 20,
  },
  innerContainer: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 14,
    borderColor: "#ccc",
  },
  count: {
    fontSize: 24,
  },
  option: {},
});
