import { Stack } from "expo-router";
import { SapientAuthProvider } from "ragnify-ai-chatbot-sdk";
import React from "react";

export default function RootLayout() {
  return (
    <SapientAuthProvider
      baseUrl="http://13.235.255.198:8000"
      apiKey="demo-api-key"
      organisationMetadata={{
        companyName: "Jaldi The Late",
        companyMotto: "Humii developer baani, ee humara hi appwa",
        madeBy: "Ravi Kishan and Manoj Tiwari",
        companyLogo: require("../assets/images/react-logo.png"),
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </SapientAuthProvider>
  );
}
