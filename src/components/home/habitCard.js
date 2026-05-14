import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons/";

export default function HabitCard({ filteredHabits, onIncrement, navigation }) {
  return (
    <View style={styles.listContainer}>
      {filteredHabits.map((habit) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={habit.id}
          style={styles.card}
          onPress={() => navigation.navigate("HabitDetails", { id: habit.id })}
        >
          <View style={styles.row}>
            <View style={styles.left}>
              <MaterialCommunityIcons
                name={habit.icon}
                size={24}
                color="black"
              />

              <View style={styles.innerCard}>
                <Text style={styles.cardText}>{habit.title}</Text>

                <View style={styles.streakBox}>
                  <Text style={styles.daysText}>{habit.goal}</Text>
                  <Text style={styles.daysText}>·</Text>
                  <AntDesign name="fire" size={12} color="#FFA500" />
                  <Text style={styles.streak}>{habit.streak}</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={styles.count}
              activeOpacity={0.8}
              onPress={() => onIncrement(habit.id)}
            >
              <Text style={styles.countText}>{habit.count}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  innerCard: {
    marginLeft: 10,
    justifyContent: "center",
  },

  streakBox: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  cardText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },

  daysText: {
    color: "#555",
    fontSize: 12,
  },

  streak: {
    fontSize: 12,
    fontWeight: "600",
  },

  count: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#eaeaea",
    borderRadius: 8,
  },

  countText: {
    fontWeight: "bold",
    color: "#333",
  },
});
