# Ragnify SDK Consumer (Expo)

This Expo app demonstrates how to integrate the **Ragnify AI Chatbot SDK** into a mobile experience using Expo Router.

## Quick start

1. Install dependencies

    ```bash
    npm install
    ```

2. Start the app

    ```bash
    npx expo start
    ```

## How we use the Ragnify SDK

### 1) Wrap the app with `SapientAuthProvider`

`app/_layout.tsx` configures the SDK with your backend and org metadata.

```tsx
import { Stack } from "expo-router";
import { SapientAuthProvider } from "ragnify-ai-chatbot-sdk";

export default function RootLayout() {
   return (
      <SapientAuthProvider
         baseUrl="http://13.235.255.198:8000"
         apiKey="demo-api-key"
         organisationMetadata={{
            companyName: "Acme",
            companyMotto: "Knowledge at your fingertips",
            madeBy: "XYZ",
            companyLogo: require("../assets/images/react-logo.png"),
         }}
      >
         <Stack screenOptions={{ headerShown: false }} />
      </SapientAuthProvider>
   );
}
```

**Notes**
- Replace `baseUrl` with your API domain when you have one.
- Keep `apiKey` in an environment variable for production builds.

### 2) Use the SDK screens for auth and chat

`app/login.tsx` and `app/register.tsx` use the SDK-provided auth screens and handle navigation on success/failure.

```tsx
import { router } from "expo-router";
import { LoginScreen } from "ragnify-ai-chatbot-sdk";

export default function LoginRoute() {
   return (
      <LoginScreen
         onRegisterLinkPress={() => router.push("/register")}
         onLoginSuccess={(user) => router.push("/home")}
         onError={(message) =>
            router.push({ pathname: "/error", params: { message } })
         }
      />
   );
}
```

`app/home.tsx` renders the chat experience, while `app/dashboard.tsx` shows the dashboard.

```tsx
import { router } from "expo-router";
import { ChatScreen } from "ragnify-ai-chatbot-sdk";

export default function HomeRoute() {
   return (
      <ChatScreen
         onNavigateToDashboard={() => router.push("/dashboard")}
         onLogout={() => router.push("/login")}
      />
   );
}
```

## Routes in this app

| Route | Screen | Source file |
| --- | --- | --- |
| `/login` | Login | `app/login.tsx` |
| `/register` | Register | `app/register.tsx` |
| `/home` | Chat | `app/home.tsx` |
| `/dashboard` | Dashboard | `app/dashboard.tsx` |

## Learn more

- [Expo Router docs](https://docs.expo.dev/router/introduction/)
- [Expo documentation](https://docs.expo.dev/)
