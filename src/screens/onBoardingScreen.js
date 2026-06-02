import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function OnBoardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headContainer}>
          <Text style={styles.tagline}>Welcome</Text>
          <View style={styles.row}>
            <Text style={styles.tagline}>to </Text>
            <Text style={styles.title}>Habit Map</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={3}>
          Build and track your habits, and see your daily improvements.
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/leaves.png")}
          style={styles.centerImage}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.replace("MainTabs")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
        <AntDesign name="double-right" size={20} color="#7B9" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7B9",
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  contentContainer: {
    alignItems: "center",
    gap: 20,
    marginTop: 60,
    zIndex: 2,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginVertical: 20,
  },
  centerImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  headContainer: {
    alignItems: "center",
    gap: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  tagline: {
    fontSize: 28,
    color: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
  },
  description: {
    color: "#e0f2f1",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#7B9",
    fontSize: 18,
    fontWeight: "600",
  },
});
