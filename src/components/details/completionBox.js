import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PieChart } from "react-native-gifted-charts";

export default function CompletionBox() {
  const data = [
    { value: 65, color: "#7B9" },
    { value: 35, color: "lightgrey" },
  ];

  return (
    <View style={styles.container}>
      <View>
        <View style={{ alignItems: "center", marginBottom: 10 }}>
          <Text style={styles.leftText}>Current</Text>
          <Text style={styles.leftText}>Streaks</Text>
          <Text>
            <AntDesign name="fire" size={14} color="#FFA500" />0
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.leftText}>Best</Text>
          <Text style={styles.leftText}>Streaks</Text>
          <Text>
            <AntDesign name="fire" size={14} color="#FFA500" />0
          </Text>
        </View>
      </View>
      <PieChart
        donut
        innerRadius={60}
        radius={70}
        data={data}
        centerLabelComponent={() => {
          return <Text style={{ fontSize: 20, color: "#555" }}>65%</Text>;
        }}
      />
      <View>
        <View style={{ alignItems: "center", marginBottom: 15 }}>
          <Text style={styles.rightText}>Times</Text>
          <Text style={styles.count}>0</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.rightText}>Missed</Text>
          <Text style={styles.count}>1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftText: {
    color: "#555",
  },
  rightText: {
    color: "#555",
  },
  count: {
    fontSize: 16,
    fontWeight: "600",
  },
});
