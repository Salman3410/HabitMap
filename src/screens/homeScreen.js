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
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const { habits, increaseHabit, deleteHabit } = useContext(HabitContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...new Set(habits.map((h) => h.category))];

  const filteredHabits = habits
    .filter(
      (h) => selectedCategory === "All" || h.category === selectedCategory,
    )
    .filter((h) => {
      const habitName = h.title || "";
      return habitName.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <Header search={search} setSearch={setSearch} />

          <Categories
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {filteredHabits.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No habit yet</Text>
            </View>
          ) : (
            <HabitCard
              filteredHabits={filteredHabits}
              onIncrement={increaseHabit}
              navigation={navigation}
              onDelete={deleteHabit}
            />
          )}
        </ScrollView>

        <AddHabitButton onPress={() => navigation.navigate("AddHabit")} />
      </View>
    </GestureHandlerRootView>
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
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 230,
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    fontWeight: "500",
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
