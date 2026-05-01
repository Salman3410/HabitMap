import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  Foundation,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons/";
import CustomButton from "../common/customButton";

export default function SecondarySettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>More</Text>

      <CustomButton
        title={"Send Feedback"}
        leftIcon={
          <MaterialCommunityIcons name="send-variant" size={24} color="black" />
        }
      />
      <CustomButton
        title={"Term Of Use"}
        leftIcon={<Ionicons name="document-text" size={24} color="black" />}
      />
      <CustomButton
        title={"Privacy Policy"}
        leftIcon={<Ionicons name="document-text" size={24} color="black" />}
      />

      <View style={styles.versionBox}>
        <Text style={styles.version}>App Version 1.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    color: "#555",
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
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
  versionBox: {
    alignItems: "center",
    marginTop: 10,
  },
  version: {
    color: "#555",
    fontSize: 16,
  },
});
