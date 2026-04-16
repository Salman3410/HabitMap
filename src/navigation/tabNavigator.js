import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "../../src/screens/homeScreen";
import SettingsScreen from "../../src/screens/settingsScreen";
import ProgressScreen from "../../src/screens/progressScreen";
const Tabs = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Progress" component={ProgressScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({});
