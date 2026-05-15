import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons/";
import { useContext, useState } from "react";
import Header from "../components/home/header";
import Categories from "../components/home/categories";
import HabitCard from "../components/home/habitCard";
import AddHabitButton from "../components/home/addHabitButton";
import { HabitContext } from "../context/habitContext";

export default function HomeScreen({ navigation }) {
  const { habits, increaseHabit } = useContext(HabitContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(habits.map((h) => h.category))];

  const filteredHabits =
    selectedCategory === "All"
      ? habits
      : habits.filter((h) => h.category === selectedCategory);

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Header />

        <Categories
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <HabitCard
          filteredHabits={filteredHabits}
          onIncrement={increaseHabit}
          navigation={navigation}
        />
      </ScrollView>

      <AddHabitButton onPress={() => navigation.navigate("AddHabit")} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingTop: 40,
    paddingBottom: 100,
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
