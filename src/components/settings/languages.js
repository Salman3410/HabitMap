import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons/";
import { useState } from "react";
import BottomSheet from "../common/bottomSheet";

const LANGUAGES = ["English", "Urdu", "Spanish"];

export default function Languages() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    setModalVisible(false);
  };
  return (
    <View>
      <View style={styles.options}>
        <View style={styles.row}>
          <Ionicons name="language-outline" size={24} color="black" />
          <Text style={styles.fontText}>Languages</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>{selectedLanguage}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <BottomSheet
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Selected Category"
      >
        {LANGUAGES.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.optionButton}
            onPress={() => handleSelect(item)}
          >
            <Text
              style={[
                styles.optionText,
                selectedLanguage === item && styles.selectedOptionText,
              ]}
            >
              {item}
            </Text>
            {selectedLanguage === item && (
              <Entypo name="check" size={18} color="#7B9" />
            )}
          </TouchableOpacity>
        ))}
      </BottomSheet>
    </View>
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
  fontText: {
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
  optionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  optionText: {
    fontSize: 16,
    color: "#444",
  },
  selectedOptionText: {
    color: "#7B9",
    fontWeight: "bold",
  },
});
