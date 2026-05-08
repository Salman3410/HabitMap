import { StyleSheet, Text, View } from "react-native";

export default function History() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    elevation: 1,
    borderRadius: 16,
    marginTop: 20,
    padding: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "500",
  },
});
