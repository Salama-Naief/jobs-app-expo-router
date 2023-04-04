import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import PopularCard from "./PopularCard";
import useFetch from "../hook/useFetch";
import { useRouter } from "expo-router";

const PopularJobs = () => {
  const router = useRouter();
  const [active, setActive] = useState("");
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });
  const handlePress = (id) => {
    setActive(id);
    router.push(`/jobDetails/${id}`);
  };
  return (
    <View className="py-4">
      <View className=" flex-row  justify-between">
        <Text className="text-xl font-bold text-violet-950">Popular jobs</Text>
        <TouchableOpacity>
          <Text className="text-gray-500 text-[16px]">Show all</Text>
        </TouchableOpacity>
      </View>
      <View className="my-4">
        {isLoading ? (
          <ActivityIndicator color="purple" size={"large"} />
        ) : error ? (
          <Text className="text-red-600">{error}</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularCard
                active={active}
                handlePress={handlePress}
                item={item}
              />
            )}
            horizontal
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: 12 }}
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
