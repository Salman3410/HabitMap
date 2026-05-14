import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CompletionBox from "../components/details/completionBox";
import DetailsHeader from "../components/details/detailsHeader";
import Title from "../components/details/title";
import History from "../components/details/history";

export default function HabitDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <DetailsHeader
        goBack={() => navigation.goBack()}
        edit={() => navigation.navigate("EditHabit")}
      />
      <CompletionBox />
      <Title />
      <History />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  emptyHeader: {
    width: 20,
    height: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
