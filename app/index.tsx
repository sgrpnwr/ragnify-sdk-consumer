import { Redirect } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Redirect href="/login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
  },
});
