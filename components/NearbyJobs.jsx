import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import useFetch from "../hook/useFetch";
import NearbyCard from "./NearbyCard";
import { useRouter } from "expo-router";

const NearbyJobs = ({ search }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch, no_of_page } = useFetch("search", {
    query: search ? search : "react",
    num_pages: page,
  });

  const handlePress = (id) => {
    router.push(`/jobDetails/${id}`);
  };

  console.log("no_of_page", no_of_page);
  const handlePage = (type) => {
    if (type === "next" && page < data.num_pages) {
      setPage(page + 1);
      refetch();
    } else if (type === "prev" && page > 1) {
      setPage(page - 1);
      refetch();
    }
  };

  return (
    <View>
      {!search && (
        <View className="flex-row justify-between">
          <Text className="text-xl font-bold text-violet-950">Nearby jobs</Text>
          <TouchableOpacity>
            <Text className="text-gray-500 text-[16px]">Show all</Text>
          </TouchableOpacity>
        </View>
      )}
      <View className="my-4">
        {isLoading ? (
          <ActivityIndicator color="purple" size={"large"} />
        ) : error || !data ? (
          <Text className="text-red-600">{error}</Text>
        ) : (
          <FlatList
            ListHeaderComponent={
              search && (
                <>
                  <Text className="text-lg font-semibold">{search}</Text>
                  <Text className="text-gray-500">Jobs opportunities</Text>
                </>
              )
            }
            ListFooterComponent={
              search && (
                <View className="py-4 flex-row justify-center gap-x-2">
                  <TouchableOpacity
                    onPress={() => handlePage("prev")}
                    disabled={page <= 1}
                    className={`${
                      page <= 1 ? "bg-orange-300" : "bg-orange-600"
                    }  rounded-lg`}
                  >
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </TouchableOpacity>
                  <Text>{page}</Text>
                  <TouchableOpacity
                    disabled={page >= no_of_page}
                    onPress={() => handlePage("next")}
                    className={`${
                      page >= no_of_page ? "bg-orange-300" : "bg-orange-600"
                    }  rounded-lg`}
                  >
                    <Ionicons name="chevron-forward" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              )
            }
            ListEmptyComponent={
              <Text className="text-purple-900">No jobs found</Text>
            }
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
              <NearbyCard item={item} hadlePress={handlePress} />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ rowGap: 12 }}
            initialNumToRender={5}
          />
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
