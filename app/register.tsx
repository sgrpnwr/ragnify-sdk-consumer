import { router } from "expo-router";
import { RegisterScreen } from "ragnify-ai-chatbot-sdk";

export default function RegisterRoute() {
  return (
    <RegisterScreen
      onLoginLinkPress={() => router.push("/login")}
      onRegisterSuccess={(user:any) => {
        console.log(`User registered succesfully: ${JSON.stringify(user)}`);
        router.push("/home");
      }}
      onError={(message: string) =>
        router.push({ pathname: "/error", params: { message } })
      }
    />
  );
}
