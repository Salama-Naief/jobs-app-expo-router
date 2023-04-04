import { Stack, Tabs } from "expo-router";
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
    ></Stack>
  );
};

export default Layout;
