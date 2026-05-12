import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddHabitHeader from "../components/addHabit/addHabitHeader";
import IconPicker from "../components/addHabit/iconPicker";
import HabitName from "../components/addHabit/habitName";
import Category from "../components/addHabit/category";
import Frequency from "../components/addHabit/frequency";
import Reminder from "../components/addHabit/reminder";
import StreakGoal from "../components/addHabit/streakGoal";
import AddButton from "../components/addHabit/addButton";

export default function AddHabit({ navigation }) {
  return (
    <View style={styles.container}>
      <AddHabitHeader goBack={() => navigation.goBack()} />
      <IconPicker />
      <HabitName />
      <Category />
      <Frequency />
      <Reminder />
      <StreakGoal />
      <AddButton onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});
