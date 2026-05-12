import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function StreakGoal() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Streak Goal</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Day</Text>
          <Entypo name="chevron-small-down" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  innerContainer: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 16,
    backgroundColor: "#eee",
    borderColor: "#ccc",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#7B9",
    paddingHorizontal: 15,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
  },
});
