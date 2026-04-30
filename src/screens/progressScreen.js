import { StyleSheet, Text, View, ScrollView } from "react-native";
import SnapShotBox from "../components/progress/snapShotBox";
import { useState } from "react";
import OverView from "../components/progress/overView";

export default function ProgressScreen() {
  return (
    <ScrollView contentContainerStyle={[styles.container, { flexGrow: 1 }]}>
      <SnapShotBox />
      <OverView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFBF4",
    paddingTop: 50,
  },
});
