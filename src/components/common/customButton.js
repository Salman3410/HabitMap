import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons/";

export default function CustomButton({ title, leftIcon, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.options}
      onPress={onPress}
    >
      <View style={styles.row}>
        {leftIcon}
        <Text style={styles.optionText}>{title}</Text>
      </View>
      <MaterialIcons name="arrow-right" size={32} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 20,
    backgroundColor: "#7B9",
    paddingVertical: 12,

    borderRadius: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  optionText: {
    fontSize: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "lightgreen",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  buttonText: {},
});
