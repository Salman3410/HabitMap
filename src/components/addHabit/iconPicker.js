import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons"; // Added Entypo import
import { useState } from "react";
import BottomSheet from "../common/bottomSheet";

const ICONS = [
  { id: 1, name: "heart-pulse", label: "Health" },
  { id: 2, name: "briefcase", label: "Work" },
  { id: 3, name: "account", label: "Personal" },
];

export default function IconPicker({ selectedIcon, onSelectIcon }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (iconName) => {
    onSelectIcon(iconName);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name={selectedIcon} size={32} color="black" />
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => setModalVisible(true)}
      >
        <MaterialCommunityIcons name="pencil" size={18} color="#fff" />
      </TouchableOpacity>

      <BottomSheet
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Selected Icon"
      >
        {ICONS.map((iconItem) => (
          <TouchableOpacity
            key={iconItem.id}
            style={styles.optionButton}
            onPress={() => handleSelect(iconItem.name)}
          >
            <View style={styles.row}>
              <MaterialCommunityIcons
                name={iconItem.name}
                size={24}
                color={selectedIcon === iconItem.name ? "#7B9" : "black"}
              />
              <Text
                style={[
                  styles.optionText,
                  selectedIcon === iconItem.name && styles.selectedOptionText,
                ]}
              >
                {iconItem.label}
              </Text>
            </View>

            {selectedIcon === iconItem.name && (
              <Entypo name="check" size={18} color="#7B9" />
            )}
          </TouchableOpacity>
        ))}
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  icon: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#ccc",
  },
  button: {
    position: "absolute",
    bottom: 10,
    right: 110,
    width: 30,
    height: 30,
    backgroundColor: "#7B9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  optionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15, // Adds clean spacing between icon and text labels
  },
  optionText: {
    fontSize: 16,
    color: "#444",
    textTransform: "capitalize",
  },
  selectedOptionText: {
    color: "#7B9",
    fontWeight: "bold",
  },
});
