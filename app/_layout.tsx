import { Stack } from "expo-router";
import { SapientAuthProvider } from "ragnify-ai-chatbot-sdk";
import React from "react";

export default function RootLayout() {
  return (
    <SapientAuthProvider
      baseUrl="http://ragnifyapi.webhop.me"
      apiKey="ba81ccfa50ceb0d68fb32eccd594cb24a4779334270642f9bcfbcbb92755c448"
      organisationMetadata={{
        companyName: "Bilano",
        companyMotto: "Knowledge is power",
        madeBy: "Sagar Panwar",
        companyLogo: require("../assets/images/react-logo.png"),
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </SapientAuthProvider>
  );
}
