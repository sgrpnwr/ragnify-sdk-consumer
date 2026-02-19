import { Stack } from "expo-router";
import { SapientAuthProvider } from "ragnify-ai-chatbot-sdk";
import React from "react";

export default function RootLayout() {
  return (
    <SapientAuthProvider
      baseUrl="https://ragnifyapi.sgrpnwr.com"
      apiKey="ea49539143faa8839e5a5ad21b30cb6086f209962a4c073345a7da67348a8839"
      organisationMetadata={{
        companyName: "Ragnify",
        companyMotto: "Knowledge at your fingertips",
        madeBy: "Sagar Panwar",
        companyLogo: require("../assets/images/logo.png"),
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </SapientAuthProvider>
  );
}
