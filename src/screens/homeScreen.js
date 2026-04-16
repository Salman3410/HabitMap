import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import Header from "../components/home/header";
import Categories from "../components/home/categories";

export default function HomeScreen({ navigation }) {
  const [habits, setHabits] = useState([
    { id: 1, title: "Drink Water", category: "Health" },
    { id: 2, title: "Read Book", category: "Personal" },
    { id: 3, title: "Workout", category: "Health" },
    { id: 4, title: "Code App", category: "Work" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(habits.map((h) => h.category))];

  const filteredHabits =
    selectedCategory === "All"
      ? habits
      : habits.filter((h) => h.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Header />

      <Categories
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <View style={styles.listContainer}>
        {filteredHabits.map((habit) => (
          <View key={habit.id} style={styles.card}>
            <Text style={styles.cardText}>{habit.title}</Text>
          </View>
        ))}
      </View>

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("AddHabit")}
      >
        <Text style={styles.plus}>＋</Text>
        <Text style={styles.label}>New Habit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 40,
  },
  listContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#333",
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
