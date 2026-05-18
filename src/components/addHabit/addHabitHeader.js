import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddHabitHeader({ goBack, title }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.emptyHeader}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  emptyHeader: {
    width: 20,
    height: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
