import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 16,
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: "#334155",
    textAlign: "center",
    lineHeight: 24,
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maintenance Mode</Text>
      <Text style={styles.message}>
        Our servers have been running non-stop, but due to low usage, we've
        temporarily paused them.
        {"\n"}
        We'll be back online soon!{"\n\n"}
        If you'd like to try the app, please reach out to the developer.
      </Text>
    </View>
  );
}
