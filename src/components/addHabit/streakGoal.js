import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import BottomSheet from "../common/bottomSheet";

const GOALS = ["Day", "Week", "Month"];

export default function StreakGoal({ selectedGoal, onSelectGoal }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (goal) => {
    onSelectGoal(goal);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Streak Goal</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>{selectedGoal}</Text>
          <Entypo name="chevron-small-down" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <BottomSheet
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Selected Goal"
      >
        {GOALS.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.optionButton}
            onPress={() => handleSelect(item)}
          >
            <Text
              style={[
                styles.optionText,
                selectedGoal === item && styles.selectedOptionText,
              ]}
            >
              {item}
            </Text>
            {selectedGoal === item && (
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
    alignItems: "center",
  },
  button: {
    backgroundColor: "#7B9",
    paddingHorizontal: 15,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
  },
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
