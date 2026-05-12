import { createContext, useState } from "react";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const increaseHabit = (id) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id ? { ...h, done: Math.min(h.done + 1, h.target) } : h,
      ),
    );
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, increaseHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
