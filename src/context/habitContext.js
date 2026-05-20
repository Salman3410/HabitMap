import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const HabitContext = createContext();

const HABITS_KEY = "@user_habits_list";
const USER_PROFILE_KEY = "@user_profile_data";

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
        if (storageHabits) setHabits(JSON.parse(storageHabits));
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
        history: [],
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
      const todayDate = new Date().toISOString().split("T")[0];

      const updatedHabits = habits.map((habit) => {
        if (habit.id.toString() === habitId.toString()) {
          const currentCount = habit.times + 1;
          let currentHistory = habit.history || [];

          if (
            currentCount >= habit.target &&
            !currentHistory.includes(todayDate)
          ) {
            currentHistory = [...currentHistory, todayDate];
          }

          return {
            ...habit,
            times: currentCount,
            count: habit.count + 1,
            streak: currentHistory.includes(todayDate)
              ? habit.streak + 1
              : habit.streak,
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
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};
