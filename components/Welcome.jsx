import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { icons, SIZES } from "../constants";
import { EvilIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const jobTypes = ["Full-time", "Part-time", "Contractor"];
const Welcome = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeJobType, setActiveJobType] = useState("Full-time");

  const handleSearch = () => {
    if (search) {
      router.push(`/search/${search}`);
    }
  };
  return (
    <View className="">
      <View className="py-4 ">
        <Text className="text-lg text-violet-950 ">Hello Adrain</Text>
        <Text className="text-2xl font-bold text-violet-950">
          Find your perfext job
        </Text>
      </View>
      <View className="px-2 flex-row gap-x-2">
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Whate are you looking for?"
          className="bg-gray-100 p-2.5 rounded-xl flex-1"
          cursorColor={"black"}
        />
        <TouchableOpacity
          onPress={() => handleSearch()}
          className="px-1.5 py-2.5 rounded-xl bg-orange-500 text-white"
        >
          <EvilIcons name="search" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`${
                activeJobType === item
                  ? " border-violet-950"
                  : " border-gray-400"
              }  border rounded-full `}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/jobDetails/${item}`);
              }}
            >
              <Text
                className={`${
                  activeJobType === item ? "text-violet-950 " : "text-gray-400 "
                } py-1 px-4 font-bold`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: 12 }}
          className="py-4"
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
