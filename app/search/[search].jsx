import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import NearbyJobs from "../../components/NearbyJobs";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  const params = useSearchParams();
  const router = useRouter();
  console.log("seach", params.search);
  return (
    <SafeAreaView className="flex-1 p-4">
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              className="p-1 rounded bg-gray-100 "
            >
              <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <NearbyJobs search={params.search} />
    </SafeAreaView>
  );
};

export default Search;
