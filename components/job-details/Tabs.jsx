import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const tapsArray = ["About", "Qualifications", "Responsibilities"];
const Taps = ({ tabSelected, setTabSelected }) => (
  <View className="flex-row py-1 justify-between">
    {tapsArray.map((item, index) => (
      <TouchableOpacity onPress={() => setTabSelected(item)} key={index}>
        <Text
          className={`${
            tabSelected === item
              ? "bg-violet-950 text-white rouded-lg border-violet-950"
              : "bg-gray-100 text-gray-800 "
          } p-2 px-4 font-bold rounded-xl`}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default Taps;
