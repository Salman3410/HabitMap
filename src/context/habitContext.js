import { createContext, useState } from "react";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
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

        const newStreak = targetReached ? h.streak + 1 : h.streak;
        const newBestStreak = Math.max(h.bestStreak || 0, newStreak);

        return {
          ...h,
          count: nextCount,
          streak: newStreak,
          bestStreak: newBestStreak,
          times: nextCount,
          // missed: ,
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
