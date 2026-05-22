import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import UseNotificationManager from "../reminder/useNotificationManager";
import TimePickerModal from "../reminder/timePickerModal";

export default function Reminder({ active, setActive }) {
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  UseNotificationManager(active, time);

  const handleTimeChange = (event, selectedDate) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
    }
    if (selectedDate) {
      setTime(selectedDate);
      if (!active) setActive(true);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleToggle = () => {
    if (!active) {
      setShowPicker(true);
    } else {
      setActive(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.header}>Reminder</Text>
          <Text style={styles.tagline}>
            {active
              ? `Notification set for ${formatTime(time)}`
              : "Recieve Notification"}
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={handleToggle}>
          <FontAwesome
            name={active ? "toggle-on" : "toggle-off"}
            size={30}
            color={active ? "#7B9" : "#555"}
          />
        </TouchableOpacity>
      </View>

      <TimePickerModal
        visible={showPicker}
        time={time}
        onChange={handleTimeChange}
      />
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
  header: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tagline: {
    fontSize: 13,
    color: "#555",
  },
});
