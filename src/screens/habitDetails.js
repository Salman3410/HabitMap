import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import CompletionBox from "../components/details/completionBox";
import DetailsHeader from "../components/details/detailsHeader";
import Title from "../components/details/title";
import History from "../components/details/history";
import { HabitContext } from "../context/habitContext";

export default function HabitDetails({ navigation, route }) {
  const { id } = route.params;
  const { habits } = useContext(HabitContext);

  const habit = habits.find((h) => h.id === id);

  if (!habit) {
    return (
      <View style={styles.container}>
        <DetailsHeader
          goBack={() => navigation.goBack()}
          edit={() => navigation.navigate("EditHabit")}
        />
        <Text>Habit not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DetailsHeader
        goBack={() => navigation.goBack()}
        edit={() => navigation.navigate("EditHabit", { id: habit.id })}
      />

      <View style={styles.card}>
        <CompletionBox
          streak={habit.streak}
          bestStreak={habit.bestStreak}
          times={habit.times}
          missed={habit.missed}
          percentage={Math.round((habit.count / habit.target) * 100) || 0}
        />
        <Title
          icon={habit.icon}
          title={habit.title}
          category={habit.category}
          goal={habit.goal}
        />
      </View>

      <History habit={habit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  card: {
    marginTop: 10,
  },
});
