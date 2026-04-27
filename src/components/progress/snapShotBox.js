import { StyleSheet, Text, View } from "react-native";

export default function SnapShotBox() {
  return (
    <View style={styles.snapshotBox}>
      <Text style={styles.topText}>Today's Snapshot</Text>
      <Text numberOfLines={2} style={styles.count}>
        0 of 0 habits completed
      </Text>
      <Text style={styles.motivate}>You still have time.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  snapshotBox: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    borderColor: "#ccc",
    width: "90%",
    alignSelf: "center",
  },
  topText: {},
  count: {
    fontSize: 20,
  },
  motivate: {
    marginTop: 20,
  },
});
