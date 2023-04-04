import { View, Text, Image } from "react-native";
import { format } from "date-fns";
import React from "react";
import { checkImageURL } from "../../utils/index";
import { icons } from "../../constants";

const Company = ({
  companyLogo,
  jobTitle,
  postedAt,
  expiredAt,
  jobType,
  companyName,
  location,
}) => {
  return (
    <View className="justify-center items-center my-4">
      <Image
        source={{
          uri: checkImageURL(companyLogo)
            ? companyLogo
            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
        }}
        resizeMode="contain"
        className="rounded w-16 h-16"
      />
      <Text className="text-gray-400">{companyName}</Text>
      <Text className="text-[18px] font-bold text-gray-800">{jobTitle}</Text>
      <View className="flex-row py-1 justify-center items-center">
        <Text className="text-gray-400">Job location / </Text>
        <Image source={icons.location} className="w-4 h-4" />
        <Text className="text-gray-700">{location}</Text>
      </View>

      <View className=" py-2 justify-center items-center">
        <View className="flex-row">
          <Text className="text-gray-400">Job Posted At / </Text>
          <Text className="text-gray-700">
            {postedAt && format(new Date(postedAt), "MMMM do, yyyy")}
          </Text>
        </View>
        <View className="flex-row py-1">
          <Text className="text-gray-400">Job Expired At / </Text>
          <Text className="text-gray-700">
            {expiredAt && format(new Date(expiredAt), "MMMM do, yyyy")}
          </Text>
        </View>
        <View className="flex-row">
          <Text className="text-gray-400">Job Type / </Text>
          <Text className="text-gray-700">{jobType}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
