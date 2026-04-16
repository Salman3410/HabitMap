import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import TabNavigator from "./tabNavigator";
import AddHabit from "../screens/addHabit";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="AddHabit" component={AddHabit} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
