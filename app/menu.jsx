import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Menu = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ presentation: "modal" }} />
      <Text>Menu cff</Text>
    </SafeAreaView>
  );
};

export default Menu;
