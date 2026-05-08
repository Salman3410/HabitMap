import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Category() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Category</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text>Fitness</Text>
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
  },
  button: {},
});
