import { Stack, Tabs, Slot } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        title: "",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#ddd",
        },
      }}
    >
      <Stack.Screen name="menu" options={{ presentation: "modal" }} />
      <Stack.Screen name="settings" options={{ presentation: "modal" }} />
    </Stack>
  );
};

export default Layout;
