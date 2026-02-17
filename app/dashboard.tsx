import { useRouter } from "expo-router";
import { DashboardScreen } from "ragnify-ai-chatbot-sdk";

export default function DashboardRoute() {
  const router = useRouter();

  return <DashboardScreen onNavigateBack={() => router.replace('/home')} onLogout={() => router.replace("/login")} />;
}
