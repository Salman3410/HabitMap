import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}></View>
      <View style={styles.searchBar}>
        <TextInput placeholder="Search" />
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Entypo name="dots-three-vertical" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 20,
    width: "80%",
    paddingHorizontal: 10,
  },
});
