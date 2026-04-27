import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TimeFilter({ options, selected, onSelect }) {
  return (
    <View style={styles.container}>
      {options.map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.button, selected === item && styles.activeButton]}
          onPress={() => onSelect(item)}
          activeOpacity={0.8}
        >
          <Text style={[styles.text, selected === item && styles.activeText]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  activeButton: {
    backgroundColor: "#333",
  },
  text: {
    color: "#333",
    fontSize: 12,
  },
  activeText: {
    color: "#fff",
  },
});
