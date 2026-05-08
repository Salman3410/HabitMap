import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Title() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="run" size={24} color="#fff" />
        </View>
        <View>
          <Text style={styles.title}>Agua</Text>
          <Text style={styles.category}>health</Text>
        </View>
      </View>
      <View style={styles.days}>
        <Text style={styles.daysText}>Every Day</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    padding: 16,
    borderRadius: 16,
    elevation: 1,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#7B9",
  },
  title: {
    fontSize: 18,
  },
  category: {
    color: "#555",
  },
  days: {
    backgroundColor: "#7B9",
    width: "30%",
    paddingVertical: 6,
    borderRadius: 10,
    marginTop: 10,
  },
  daysText: {
    alignSelf: "center",
    color: "#fff",
  },
});
