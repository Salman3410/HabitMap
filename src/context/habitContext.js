import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const HabitContext = createContext();

const HABITS_KEY = "@user_habits_list";
const USER_PROFILE_KEY = "@user_profile_data";

const getPeriodId = (date, frequency) => {
  const yyyy = date.getFullYear();
  if (frequency === "Month") {
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    return `${yyyy}-${mm}`;
  }
  if (frequency === "Week") {
    const firstDayOfYear = new Date(yyyy, 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    const weekNum = Math.ceil(
      (pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7,
    );
    return `${yyyy}-W${weekNum}`;
  }

  return date.toISOString().split("T")[0];
};

const getPreviousPeriodId = (frequency) => {
  const date = new Date();
  if (frequency === "Month") {
    date.setMonth(date.getMonth() - 1);
    return getPeriodId(date, "Month");
  }
  if (frequency === "Week") {
    date.setDate(date.getDate() - 7);
    return getPeriodId(date, "Week");
  }
  date.setDate(date.getDate() - 1);
  return getPeriodId(date, "Day");
};

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const [storageHabits, storedProfile] = await Promise.all([
          AsyncStorage.getItem(HABITS_KEY),
          AsyncStorage.getItem(USER_PROFILE_KEY),
        ]);

        if (storageHabits) {
          const parsedHabits = JSON.parse(storageHabits);
          const now = new Date();

          const validatedHabits = parsedHabits.map((habit) => {
            const freq = habit.frequency || "Day";
            const currentPeriod = getPeriodId(now, freq);
            const previousPeriod = getPreviousPeriodId(freq);
            const history = habit.history || [];

            const activeStreak =
              history.includes(currentPeriod) ||
              history.includes(previousPeriod);

            const isNewPeriod = !history.includes(currentPeriod);
            const verifiedTimes = isNewPeriod ? 0 : habit.times;

            return {
              ...habit,
              times: verifiedTimes,
              streak: activeStreak ? habit.streak : 0,
            };
          });

          setHabits(validatedHabits);

          await AsyncStorage.setItem(
            HABITS_KEY,
            JSON.stringify(validatedHabits),
          );
        }
        if (storedProfile) setUserProfile(JSON.parse(storedProfile));
      } catch (error) {
        console.error("Failed to load local data from storage: ", error);
      } finally {
        setLoading(false);
      }
    };
    loadStorageData();
  }, []);

  const addHabit = async (newHabit) => {
    try {
      const structuredHabit = {
        ...newHabit,
        id: newHabit.id.toString(),
        frequency: newHabit.frequency || "Day",
        history: [],
        times: 0,
        streak: 0,
        bestStreak: 0,
      };

      const updatedHabits = [structuredHabit, ...habits];
      setHabits(updatedHabits);
      await AsyncStorage.setItem(HABITS_KEY, JSON.stringify(updatedHabits));
    } catch (error) {
      console.error("Failed to save a new habit:", error);
    }
  };

  const updateHabit = (updatedHabit) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === updatedHabit.id ? updatedHabit : h)),
    );
  };

  const increaseHabit = async (habitId) => {
    try {
      const updatedHabits = habits.map((habit) => {
        if (habit.id.toString() === habitId.toString()) {
          if ((habit.times || 0) >= habit.target) {
            return habit;
          }

          const currentCount = habit.times + 1;
          let currentHistory = habit.history || [];
          let newStreak = habit.streak || 0;
          let newBestStreak = habit.bestStreak || 0;

          const freq = habit.frequency || "Day";
          const currentPeriod = getPeriodId(new Date(), freq);
          const previousPeriod = getPreviousPeriodId(freq);

          if (
            currentCount === habit.target &&
            !currentHistory.includes(currentPeriod)
          ) {
            currentHistory = [...currentHistory, currentPeriod];

            const completePrevious = currentHistory.includes(previousPeriod);
            const hasNoHistory = currentHistory.length === 1;

            if (completePrevious || hasNoHistory) {
              newStreak = (habit.streak || 0) + 1;
            } else {
              newStreak = 1;
            }
            newBestStreak = Math.max(newStreak, habit.bestStreak || 0);
          }

          return {
            ...habit,
            times: currentCount,
            count: (habit.count || 0) + 1,
            streak: newStreak,
            bestStreak: newBestStreak,
            history: currentHistory,
          };
        }
        return habit;
      });

      setHabits(updatedHabits);
      await AsyncStorage.setItem(HABITS_KEY, JSON.stringify(updatedHabits));
    } catch (error) {
      console.error("Failed to update habit progress:", error);
    }
  };

  const deleteHabit = async (habitId) => {
    try {
      const filtered = habits.filter(
        (h) => h.id.toString() !== habitId.toString(),
      );
      setHabits(filtered);
      await AsyncStorage.setItem(HABITS_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error("Failed to delete habit:", error);
    }
  };

  const updateUserProfile = async (profileData) => {
    try {
      setUserProfile(profileData);
      await AsyncStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profileData));
    } catch (error) {
      console.error("Failed to save user profile:", error);
    }
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        userProfile,
        loading,
        addHabit,
        increaseHabit,
        updateHabit,
        deleteHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};
