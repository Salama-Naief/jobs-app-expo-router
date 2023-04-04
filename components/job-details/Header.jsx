import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
const Header = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Stack.Screen
      options={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={handleBack}
            className="p-1 rounded bg-gray-100 "
          >
            <Ionicons name="arrow-back-sharp" size={24} color="black" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity className="p-1 rounded bg-gray-100 ">
            <Ionicons name="share-social-outline" size={24} color="gray" />
          </TouchableOpacity>
        ),
      }}
    />
  );
};

export default Header;
