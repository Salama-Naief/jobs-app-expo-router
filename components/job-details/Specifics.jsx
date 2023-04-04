import { View, Text } from "react-native";
import React from "react";

const Specifics = ({ title, data }) => {
  return (
    <View className="">
      <Text className="text-lg text-gray-700 font-bold py-3">{title} :</Text>
      {data.map((item, index) => (
        <View key={index} className="flex-row items-center gap-x-2 my-1">
          <View className="w-2 h-2 bg-gray-500 rounded-full" />
          <Text className="text-gray-600 text-[15px]">{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default Specifics;
