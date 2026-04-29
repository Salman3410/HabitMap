import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function BarChart() {
  return (
    <View style={styles.container}>
      <View style={styles.streakContainer}>
        <AntDesign name="fire" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text>0 Day</Text>
          <Text>Top Streak</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "97%",
    backgroundColor: "lightgreen",
    paddingVertical: 10,
    alignSelf: "center",
    marginTop: 20,
  },
  streakContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },
});
