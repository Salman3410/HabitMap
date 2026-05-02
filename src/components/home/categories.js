import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Categories({ categories, selected, onSelect }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((cat, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, selected === cat && styles.activeButton]}
          onPress={() => onSelect(cat)}
          activeOpacity={0.8}
        >
          <Text
            style={[styles.buttonText, selected === cat && styles.activeText]}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: "row",
  },
  button: {
    borderWidth: 1,
    height: 35,
    paddingHorizontal: 15,
    borderColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#555",
  },
  activeButton: {
    backgroundColor: "#7B9",
    borderColor: "rgb(100, 177, 138)",
  },
  activeText: {
    color: "#fff",
  },
});
