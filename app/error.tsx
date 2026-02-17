import { Link, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ErrorRoute() {
  const { message } = useLocalSearchParams<{ message?: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.message}>
        {message ?? "Please try again or contact support."}
      </Text>

      <View style={styles.actions}>
        <Link href="/login" asChild>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Back to Login</Text>
          </Pressable>
        </Link>
        <Link href="/home" asChild>
          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Go to Home</Text>
          </Pressable>
        </Link>
      </View>
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
    backgroundColor: "#fff7ed",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#9a3412",
  },
  message: {
    fontSize: 14,
    color: "#7c2d12",
    textAlign: "center",
  },
  actions: {
    width: "100%",
    gap: 12,
    marginTop: 16,
  },
  primaryButton: {
    backgroundColor: "#ea580c",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#fdba74",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  secondaryButtonText: {
    color: "#9a3412",
    fontSize: 16,
    fontWeight: "600",
  },
});
