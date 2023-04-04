import { View, Text } from "react-native";
import React from "react";

const JobAbout = ({ data }) => {
  return (
    <View className="">
      <Text className="text-lg font-bold py-3">About the job:</Text>
      <Text className="text-gray-600 text-[15px]">{data}</Text>
    </View>
  );
};

export default JobAbout;
