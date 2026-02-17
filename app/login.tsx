import { router } from "expo-router";
import { LoginScreen } from "ragnify-ai-chatbot-sdk";

export default function LoginRoute() {
  return (
    <LoginScreen
      onRegisterLinkPress={() => router.push("/register")}
      onLoginSuccess={(user:any) => {
        console.log(`User logged in succesfully: ${JSON.stringify(user)}`);
        router.push("/home");
      }}
      onError={(message: string) =>
        router.push({ pathname: "/error", params: { message } })
      }
    />
  );
}
