import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TimeFilter from "./timeFilter";
import { PieChart } from "react-native-gifted-charts";
import Dashboard from "./dashboard";
import Chart from "./chart";

export default function OverView() {
  const filters = ["This Week", "This Month", "This Year", "All Time"];
  const [selectedFilter, setSelectedFilter] = useState("This Week");

  const data = {
    "This Week": 40,
    "This Month": 65,
    "This Year": 80,
    "All Time": 90,
  };

  const progress = data[selectedFilter];

  const pieData = [
    { value: progress, color: "#7B9" },
    { value: 100 - progress, color: "lightgrey" },
  ];

  return (
    <View style={styles.overViewBox}>
      <Text style={styles.title}>Overview</Text>

      <TimeFilter
        options={filters}
        selected={selectedFilter}
        onSelect={setSelectedFilter}
      />

      <View style={styles.chartBox}>
        <PieChart
          donut
          innerRadius={60}
          radius={90}
          data={pieData}
          centerLabelComponent={() => {
            return <Text style={styles.centerText}>{progress}%</Text>;
          }}
        />
      </View>
      <Dashboard />
      <Chart />
    </View>
  );
}

const styles = StyleSheet.create({
  overViewBox: {
    backgroundColor: "#fff",
    marginTop: 50,
    padding: 20,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    elevation: 2,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  chartBox: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
