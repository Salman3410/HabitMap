import React from "react";
import { Platform, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function TimePickerModal({ visible, time, onChange }) {
  if (!visible) return null;

  return (
    <View>
      <DateTimePicker
        value={time}
        mode="time"
        is24Hour={false}
        display={Platform.OS === "ios" ? "spinner" : "default"}
        onChange={onChange}
      />
      {Platform.OS === "ios" && (
        <Button title="Done" onPress={onClose} color="#7B9" />
      )}
    </View>
  );
}
