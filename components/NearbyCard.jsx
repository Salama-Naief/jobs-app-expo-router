import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { checkImageURL } from "../utils/index";
const NearbyCard = ({ item, hadlePress }) => {
  return (
    <TouchableOpacity
      onPress={() => hadlePress(item.job_id)}
      className="bg-gray-50 rounded p-4"
    >
      <View>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className="rounded w-12 h-12"
        />

        <View>
          <Text className="text-[18px] font-[18px]">{item.job_title}</Text>
          <Text className="text-gray-400">{item.employer_name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyCard;
