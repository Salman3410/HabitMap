import { StyleSheet, Text, View } from "react-native";
import Header from "../components/settings/header";
import PrimarySettings from "../components/settings/primarySettings";
import SecondarySettings from "../components/settings/secondarySettings";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <PrimarySettings />
      <SecondarySettings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});
