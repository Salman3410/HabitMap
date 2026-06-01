import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import TabNavigator from "./tabNavigator";
import AddHabit from "../screens/addHabit";
import HabitDetails from "../screens/habitDetails";
import EditHabit from "../screens/editHabit";
import OnBoardingScreen from "../screens/onBoardingScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoard" component={OnBoardingScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="AddHabit" component={AddHabit} />
      <Stack.Screen name="HabitDetails" component={HabitDetails} />
      <Stack.Screen name="EditHabit" component={EditHabit} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
