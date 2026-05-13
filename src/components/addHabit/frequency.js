import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function Frequency() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.header}>Frequency</Text>
          <Text style={styles.tagline}>Completion per day</Text>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={decrease}
          >
            <AntDesign name="minus" size={14} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.count}>{count}</Text>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={increase}
          >
            <AntDesign name="plus" size={14} color="#fff" />
          </TouchableOpacity>
        </View>
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
  header: {},
  tagline: {
    fontSize: 13,
    color: "#555",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 10,
  },
  count: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#7B9",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
  },
});
