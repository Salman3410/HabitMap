import { useEffect } from "react";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function useNotificationManager({ active, time }) {
  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        await Notifications.requestPermissionsAsync();
      }
    }
    requestPermissions();
  }, []);

  useEffect(() => {
    async function updateNotification() {
      if (active && time) {
        await Notifications.cancelAllScheduledNotificationsAsync();

        await Notifications.scheduleNotificationAsync({
          content: {
            title: "🔔 Reminder!",
            body: "This is your scheduled reminder.",
            sound: true,
          },
          trigger: {
            hour: time.getHours(),
            minute: time.getMinutes(),
            repeats: true,
          },
        });
      } else {
        await Notifications.cancelAllScheduledNotificationsAsync();
      }
    }

    updateNotification();
  }, [active, time]);
}
