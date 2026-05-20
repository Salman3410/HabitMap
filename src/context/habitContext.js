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

  const addHabit = (habit) => {
    setHabits((prev) => [...prev, { ...habit, history: habit.history || [] }]);
  };

  const updateHabit = (updatedHabit) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === updatedHabit.id ? updatedHabit : h)),
    );
  };

  const increaseHabit = (id) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;

        const nextCount = Math.min(h.count + 1, h.target);
        const targetReached = nextCount === h.target && h.count !== h.target;

        const todayStr = new Date().toISOString().split("T")[0];

        let updatedHistory = [...(h.history || [])];
        if (targetReached && !updatedHistory.includes(todayStr)) {
          updatedHistory.push(todayStr);
        }

        const newStreak = targetReached ? h.streak + 1 : h.streak;
        const newBestStreak = Math.max(h.bestStreak || 0, newStreak);

        return {
          ...h,
          count: nextCount,
          streak: newStreak,
          bestStreak: newBestStreak,
          times: nextCount,
          history: updatedHistory,
        };
      }),
    );
  };

  return (
    <HabitContext.Provider
      value={{ habits, addHabit, increaseHabit, updateHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
};
