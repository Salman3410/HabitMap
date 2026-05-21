import { StyleSheet, Text, View } from "react-native";

export default function History({ habit }) {
  const current = new Date();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth();

  const monthName = current.toLocaleString("default", { month: "long" });

  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  const startDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  const blankSpaces = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

  const habitHistory = habit?.history || [];
  const daysOfWeekLabels = ["M", "T", "W", "T", "F", "S", "S"];

  const calendarGridItems = [
    ...Array(blankSpaces).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        History ({monthName} {currentYear})
      </Text>

      <View style={styles.labelsRow}>
        {daysOfWeekLabels.map((label, idx) => (
          <Text key={idx} style={styles.labelText}>
            {label}
          </Text>
        ))}
      </View>

      <View style={styles.gridContainer}>
        {calendarGridItems.map((day, index) => {
          if (day === null) {
            return (
              <View key={`empty-${index}`} style={styles.gridItemSquare} />
            );
          }

          const padMonth = String(currentMonth + 1).padStart(2, "0");
          const padDay = String(day).padStart(2, "0");
          const dateString = `${currentYear}-${padMonth}-${padDay}`;

          const isCompleted = habitHistory.includes(dateString);

          return (
            <View key={`day-${day}`} style={styles.gridItemSquare}>
              <View
                style={[
                  styles.circle,
                  isCompleted ? styles.completedCircle : styles.missCircle,
                ]}
              >
                <Text
                  style={[
                    styles.dayNumberText,
                    isCompleted ? styles.completedText : styles.missText,
                  ]}
                >
                  {day}
                </Text>
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
    marginBottom: 16,
  },
  labelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  labelText: {
    width: "13%",
    textAlign: "center",
    fontSize: 12,
    color: "#888",
    fontWeight: "600",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  gridItemSquare: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  circle: {
    width: "85%",
    height: "85%",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
  },
  completedCircle: {
    backgroundColor: "#7B9",
    borderColor: "rgb(89, 158, 123)",
  },
  missCircle: {
    backgroundColor: "#F2F2F7",
    borderColor: "#E5E5EA",
  },
  dayNumberText: {
    fontSize: 11,
    fontWeight: "600",
  },
  completedText: {
    color: "#fff",
  },
  missText: {
    color: "#666",
  },
});
