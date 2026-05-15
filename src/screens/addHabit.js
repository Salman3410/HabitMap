import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddHabitHeader from "../components/addHabit/addHabitHeader";
import IconPicker from "../components/addHabit/iconPicker";
import HabitName from "../components/addHabit/habitName";
import Category from "../components/addHabit/category";
import Frequency from "../components/addHabit/frequency";
import Reminder from "../components/addHabit/reminder";
import StreakGoal from "../components/addHabit/streakGoal";
import AddButton from "../components/addHabit/addButton";
import { useContext, useState } from "react";
import { HabitContext } from "../context/habitContext";

export default function AddHabit({ navigation }) {
  const { addHabit } = useContext(HabitContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Health");
  const [icon, setIcon] = useState("heart-pulse");
  const [frequency, setFrecuency] = useState(1);
  const [reminder, setReminder] = useState(false);
  const [goal, setGoal] = useState("Day");

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a habit name");
      return;
    }

    const newHabit = {
      id: Date.now(),
      title: title.trim(),
      category: category,
      icon: icon,
      goal: goal,
      frequency: frequency,
      reminder: reminder,
      streak: 0,
      bestStreak: 0,
      count: 0,
      target: frequency,
      times: 0,
      missed: 0,
    };

    addHabit(newHabit);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <AddHabitHeader goBack={() => navigation.goBack()} />
      <IconPicker selectedIcon={icon} onSelectIcon={setIcon} />
      <HabitName value={title} onChangeText={setTitle} />
      <Category selectedCategory={category} onSelectCategory={setCategory} />
      <Frequency count={frequency} setCount={setFrecuency} />
      <Reminder active={reminder} setActive={setReminder} />
      <StreakGoal selectedGoal={goal} onSelectGoal={setGoal} />
      <AddButton onPress={handleSave} />
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
