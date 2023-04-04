import { View, Text } from "react-native";
import React from "react";

const SkeltonNearbyCard = () => {
  return (
    <View className="px-4 ">
      <View className="rounded bg-gray-50 p-4 flex-row gap-x-2">
        <View className="w-10 h-10 bg-gray-300 rounded"></View>
        <View className="flex-1 justify-center">
          <View className="h-2.5 mb-2 rounded bg-gray-300 w-64"></View>
          <View className="h-2.5 rounded bg-gray-300 w-48"></View>
        </View>
      </View>
    </View>
  );
};

export default SkeltonNearbyCard;
