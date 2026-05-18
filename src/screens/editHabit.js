import { StyleSheet, Text, View, Alert } from "react-native";
import { useContext, useState } from "react";
import { HabitContext } from "../context/habitContext";
import AddHabitHeader from "../components/addHabit/addHabitHeader";
import IconPicker from "../components/addHabit/iconPicker";
import HabitName from "../components/addHabit/habitName";
import Category from "../components/addHabit/category";
import Frequency from "../components/addHabit/frequency";
import Reminder from "../components/addHabit/reminder";
import StreakGoal from "../components/addHabit/streakGoal";
import AddButton from "../components/addHabit/addButton";

export default function EditHabit({ navigation, route }) {
  const { id } = route.params || {};
  const { habits, updateHabit } = useContext(HabitContext);

  const habit = habits.find((h) => h.id === id);

  const [title, setTitle] = useState(habit?.title || "");
  const [category, setCategory] = useState(habit?.category || "Health");
  const [icon, setIcon] = useState(habit?.icon || "heart-pulse");
  const [frequency, setFrecuency] = useState(habit?.frequency || 1);
  const [reminder, setReminder] = useState(habit?.reminder || false);
  const [goal, setGoal] = useState(habit?.goal || "Day");

  if (!habit) {
    return (
      <View style={styles.container}>
        <Text>Habit not found</Text>
      </View>
    );
  }

  const handleUpdate = () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a habit name");
      return;
    }

    const updatedHabit = {
      ...habit,
      title: title.trim(),
      category: category,
      icon: icon,
      goal: goal,
      frequency: frequency,
      reminder: reminder,
      target: frequency,
    };

    updateHabit(updatedHabit);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AddHabitHeader title="Edit Habit" goBack={() => navigation.goBack()} />

      <IconPicker selectedIcon={icon} onSelectIcon={setIcon} />
      <HabitName value={title} onChangeText={setTitle} />
      <Category selectedCategory={category} onSelectCategory={setCategory} />
      <Frequency count={frequency} setCount={setFrecuency} />
      <Reminder active={reminder} setActive={setReminder} />
      <StreakGoal selectedGoal={goal} onSelectGoal={setGoal} />

      <AddButton onPress={handleUpdate} title="Save" />
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
