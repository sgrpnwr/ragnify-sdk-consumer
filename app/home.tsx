import { router } from "expo-router";
import { ChatScreen } from "ragnify-ai-chatbot-sdk";
import { StyleSheet } from "react-native";

export default function HomeRoute() {
  return (
    <ChatScreen
      onNavigateToDashboard={() => router.push("/dashboard")}
      onLogout={() => router.push("/login")}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 12,
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
  },
  subtitle: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
  },
  actions: {
    width: "100%",
    gap: 12,
    marginTop: 12,
  },
  primaryButton: {
    backgroundColor: "#6366f1",
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
    borderColor: "#cbd5f5",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#334155",
    fontSize: 16,
    fontWeight: "600",
  },
});
