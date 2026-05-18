import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-gifted-charts";
import { useContext } from "react";
import { HabitContext } from "../../context/habitContext";

export default function Chart() {
  const { habits } = useContext(HabitContext);

  const highestStreak = habits.reduce((max, habit) => {
    return Math.max(max, habit.bestStreak || 0);
  }, 0);

  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.streakContainer}>
          <AntDesign name="fire" size={24} color="#FFA500" />
          <View style={styles.textContainer}>
            <Text style={styles.days}>
              {highestStreak} {highestStreak === 1 ? "Day" : "Days"}
            </Text>
            <Text style={styles.streakText}>Top Streak</Text>
          </View>
        </View>
      </View>
      <View style={styles.barChart}>
        <Text style={styles.trendText}>Consistency Trend</Text>
        <LineChart
          data={data}
          color={"#177AD5"}
          thickness={3}
          dataPointsColor={"red"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "97%",
    backgroundColor: "#7B9",
    paddingVertical: 10,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 16,
    elevation: 2,
  },
  streakContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  days: {
    fontSize: 18,
  },
  streakText: {
    color: "#555",
  },
  barChart: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#7B9",
    padding: 20,
    width: "97%",
    borderRadius: 16,
    alignSelf: "center",
  },
  trendText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
