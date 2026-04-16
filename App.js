import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import RootNavigator from "./src/navigation/rootNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
