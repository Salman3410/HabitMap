import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  Foundation,
  Octicons,
} from "@expo/vector-icons/";
import CustomButton from "../common/customButton";

export default function PrimarySettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>App Settings</Text>

      <View style={styles.options}>
        <View style={styles.row}>
          <AntDesign name="font-size" size={20} color="black" />
          <Text style={styles.optionText}>Font Style</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>Host Grotesk</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.options}>
        <View style={styles.row}>
          <Ionicons name="language-outline" size={24} color="black" />
          <Text style={styles.optionText}>Languages</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>English</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <CustomButton
        title={"Archieve Habits"}
        leftIcon={<Foundation name="archive" size={24} color="black" />}
      />
      <CustomButton
        title={"Import/Export Data"}
        leftIcon={<Octicons name="upload" size={24} color="black" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    color: "#555",
    fontSize: 16,
    marginBottom: 10,
  },
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
