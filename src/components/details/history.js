import { StyleSheet, Text, View } from "react-native";

export default function History({ habit }) {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  const getCurrentWeekDate = () => {
    const current = new Date();
    const dayIndex = current.getDay();

    const distanceToMonday = dayIndex === 0 ? -6 : 1 - dayIndex;

    const monday = new Date(current);
    monday.setDate(current.getDate() + distanceToMonday);

    return daysOfWeek.map((_, index) => {
      const nextDay = new Date(monday);
      nextDay.setDate(monday.getDate() + index);
      return nextDay.toISOString().split("T")[0];
    });
  };

  const weekDates = getCurrentWeekDate();
  const habitHistory = habit?.history || [];
  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
      <View style={styles.graphContainer}>
        {daysOfWeek.map((day, index) => {
          const isCompleted = habitHistory.includes(weekDates[index]);

          return (
            <View key={day} style={styles.dayColumn}>
              <Text style={styles.dayText}>{day}</Text>
              <View
                style={[
                  styles.circle,
                  isCompleted ? styles.completedCircle : styles.missCircle,
                ]}
              >
                {isCompleted && <View style={styles.innerCheck} />}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    elevation: 2,
    borderRadius: 16,
    marginTop: 20,
    padding: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "500",
  },
  graphContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayColumn: {
    alignItems: "center",
    flex: 1,
  },
  dayText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
    fontWeight: "500",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  completedCircle: {
    backgroundColor: "#7B9",
    borderColor: "rgb(89, 158, 123)",
  },
  missCircle: {
    backgroundColor: "#F2F2F7",
    borderColor: "#E5E5EA",
  },
  innerCheck: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
