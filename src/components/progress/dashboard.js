import { StyleSheet, Text, View } from "react-native";

const OPTIONS = [
  { id: 1, title: "Done", count: 1 },
  { id: 2, title: "Target", count: 0 },
  { id: 3, title: "Habits", count: 2 },
];

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {OPTIONS.map((item) => (
        <View style={styles.innerContainer} key={item.id}>
          <Text style={styles.count}>{item.count}</Text>
          <Text style={styles.option}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 20,
  },
  innerContainer: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 14,
    borderColor: "#ccc",
  },
  count: {
    fontSize: 24,
  },
  option: {},
});
