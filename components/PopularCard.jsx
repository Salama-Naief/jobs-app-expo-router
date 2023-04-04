import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import { checkImageURL } from "../utils";

const PopularCard = ({ item, handlePress, active }) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(item.job_id)}
      className={`${
        active ? "bg-purple-800" : " bg-gray-50"
      } w-64 px-6 py-2 rounded`}
    >
      <Image
        source={{
          uri: checkImageURL(item?.employer_logo)
            ? item.employer_logo
            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
        }}
        resizeMode="contain"
        className="rounded w-12 h-12"
      />

      <Text className={`${active ? "text-gray-300" : "text-gray-500"}  my-2 `}>
        {item.employer_name}
      </Text>
      <Text
        className={`${
          active ? "text-white" : "text-gray-800"
        } font-bold  text-[18px]`}
        numberOfLines={1}
      >
        {item.job_title}
      </Text>
      <View className="flex-row justify-between">
        <Text
          className={`${
            active ? "text-gray-300" : "text-gray-500"
          } text-gray-500  mt-2 text-[15px]`}
        >
          {item.job_country}
        </Text>
        <Text className="text-gray-500 text-[15px] mt-2">{item.job_city}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularCard;
