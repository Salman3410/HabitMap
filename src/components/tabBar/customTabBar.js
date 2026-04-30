import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomTabBar({ state, navigation }) {
  const getIconName = (routeName, isFocused) => {
    switch (routeName) {
      case "Home":
        return isFocused ? "home" : "home-outline";
      case "Progress":
        return isFocused ? "stats-chart" : "stats-chart-outline";
      case "Settings":
        return isFocused ? "settings" : "settings-outline";
      default:
        return "ellipse";
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tab}
            activeOpacity={0.8}
          >
            <Ionicons
              name={getIconName(route.name, isFocused)}
              size={20}
              color={isFocused ? "#7B9" : "gray"}
            />
            <Text style={{ color: isFocused ? "#7B9" : "gray" }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderTopColor: "#eee",
  },
  tab: {
    alignItems: "center",
  },
});
