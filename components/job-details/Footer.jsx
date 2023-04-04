import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import React from "react";
import { icons } from "../../constants";
const Footer = ({ url }) => {
  return (
    <View className="flex-row mt-4 items-center gap-x-2">
      <TouchableOpacity>
        <Image source={icons.heart} className="w-8 h-8" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL(url)}
        className="flex-1 bg-orange-600 p-2.5 rounded-xl"
      >
        <Text className="text-white text-center text-lg font-bold">
          Apply to the job
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
