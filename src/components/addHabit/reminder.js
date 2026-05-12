import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function Reminder() {
  const [active, setActive] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.header}>Reminder</Text>
          <Text style={styles.tagline}>Recieve Notification</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setActive(!active)}
        >
          {active ? (
            <FontAwesome name="toggle-on" size={30} color="#7B9" />
          ) : (
            <FontAwesome name="toggle-off" size={30} color="#555" />
          )}
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
  header: {},
  tagline: {
    fontSize: 13,
    color: "#555",
  },
});
