import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TimeFilter from "./timeFilter";

export default function OverView() {
  const filters = ["This Week", "This Month", "This Year", "All Time"];
  const [selectedFilter, setSelectedFilter] = useState("This Week");

  const data = {
    "This Week": 40,
    "This Month": 65,
    "This Year": 80,
    "All Time": 90,
  };

  return (
    <View style={styles.overViewBox}>
      <Text style={styles.title}>Overview</Text>

      <TimeFilter
        options={filters}
        selected={selectedFilter}
        onSelect={setSelectedFilter}
      />

      <View style={styles.dataBox}>
        <Text style={styles.dataText}>Progress: {data[selectedFilter]}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overViewBox: {
    backgroundColor: "#fff",
    marginTop: 70,
    padding: 20,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dataBox: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  dataText: {
    fontSize: 16,
  },
});
