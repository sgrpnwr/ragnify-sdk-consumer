import { Stack } from "expo-router";
import { SapientAuthProvider } from "ragnify-ai-chatbot-sdk";
import React from "react";

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
