import { StyleSheet, Text, View } from "react-native";
import SnapShotBox from "../components/progress/snapShotBox";
import { useState } from "react";
import OverView from "../components/progress/overView";

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <SnapShotBox />
      <OverView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFBF4",
    paddingVertical: 50,
  },
});
