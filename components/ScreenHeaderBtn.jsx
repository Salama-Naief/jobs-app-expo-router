import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const ScreenHeaderBtn = ({ imgUrl, name }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/models/${name}`)}
      className={`${
        name === "menu" && "bg-gray-100 p-1.5"
      } h-fit   rounded-lg overflow-hidden`}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        className={`${name === "menu" ? "w-6 h-6" : "w-10 h-10"}`}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
