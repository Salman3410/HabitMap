import { useEffect } from "react";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function useNotificationManager({ active, time, habits = [] }) {
  useEffect(() => {
    async function setupNotificationSystem() {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        await Notifications.requestPermissionsAsync();
      }

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("habit-reminders", {
          name: "Habit Reminders",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
        });
      }
    }
    setupNotificationSystem();
  }, []);

  useEffect(() => {
    async function manageNotifications() {
      // 1. MANAGE USER'S DAILY RECURRING REMINDER
      try {
        await Notifications.cancelScheduledNotificationAsync(
          "user-daily-reminder",
        );
      } catch (e) {
        /* ignore if doesn't exist */
      }

      if (active && time && typeof time.getHours === "function") {
        await Notifications.scheduleNotificationAsync({
          id: "user-daily-reminder",
          content: {
            title: "🔔 Habit Reminder",
            body: "Time to check in on your habits for today!",
            sound: true,
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            channelId: "habit-reminders",
            hour: time.getHours(),
            minute: time.getMinutes(),
          },
        });
      }

      // 2. MANAGE CONDITIONAL STREAK PROTECTION WARNINGS
      const warningIds = ["streak-4h", "streak-2h", "streak-30m"];
      for (const id of warningIds) {
        try {
          await Notifications.cancelScheduledNotificationAsync(id);
        } catch (e) {}
      }

      const hasUncompletedHabits = habits.some(
        (habit) => (habit.times || 0) < habit.target,
      );

      if (hasUncompletedHabits) {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(23, 59, 59, 999);

        const msUntilDeadline = midnight.getTime() - now.getTime();

        const fourHoursInMs = 4 * 60 * 60 * 1000;
        const twoHoursInMs = 2 * 60 * 60 * 1000;
        const thirtyMinsInMs = 30 * 60 * 1000;

        // Schedule 4-Hour Warning
        if (msUntilDeadline > fourHoursInMs) {
          await Notifications.scheduleNotificationAsync({
            id: "streak-4h",
            content: {
              title: "🔥 Streak At Risk! (4h left)",
              body: "You have 4 hours left to complete your habits and save your streak!",
            },
            trigger: {
              seconds: Math.floor((msUntilDeadline - fourHoursInMs) / 1000),
            },
          });
        }

        // Schedule 2-Hour Warning
        if (msUntilDeadline > twoHoursInMs) {
          await Notifications.scheduleNotificationAsync({
            id: "streak-2h",
            content: {
              title: "⚠️ Fast Approaching Deadline (2h left)",
              body: "Only 2 hours remaining. Don't lose all your hard work!",
            },
            trigger: {
              seconds: Math.floor((msUntilDeadline - twoHoursInMs) / 1000),
            },
          });
        }

        // Schedule 30-Minute Warning
        if (msUntilDeadline > thirtyMinsInMs) {
          await Notifications.scheduleNotificationAsync({
            id: "streak-30m",
            content: {
              title: "🚨 Final Warning! (30 min left)",
              body: "Your streak resets in 30 minutes! Complete it right now!",
            },
            trigger: {
              seconds: Math.floor((msUntilDeadline - thirtyMinsInMs) / 1000),
            },
          });
        }
      }
    }

    manageNotifications();
  }, [active, time, habits]);
}
