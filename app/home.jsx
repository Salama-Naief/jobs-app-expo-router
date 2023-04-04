import { Stack, useRouter } from "expo-router";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Home from "../screens/Home";
import { icons, images } from "../constants";
import Welcome from "../components/Welcome";
import PopularJobs from "../components/PopularJobs";
import NearbyJobs from "../components/NearbyJobs";
import useFetch from "../hook/useFetch";
import NearbyCard from "../components/NearbyCard";
import SkeltonNearbyCard from "../components/SkeltonNearbyCard";

export default function App() {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React ",
    num_pages: "1",
  });

  const handlePress = (id) => {
    console.log("id", id);
    router.push(`/jobDetails/${id}`);
  };

  return (
    <SafeAreaView className="flex-1 p-4" style={{ direction: "rtl" }}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <ScreenHeaderBtn imgUrl={icons.menu} name={"menu"} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn imgUrl={images.profile} name={"settings"} />
          ),
        }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="">
            <Welcome />
            <PopularJobs />
            <View className="flex-row justify-between">
              <Text className="text-xl font-bold text-violet-950">
                Nearby jobs
              </Text>
              <TouchableOpacity>
                <Text className="text-gray-500 text-[16px]">Show all</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        ListEmptyComponent={
          error ? (
            <Text className="text-red-600">{error}</Text>
          ) : (
            isLoading && (
              <>
                <SkeltonNearbyCard />
                <SkeltonNearbyCard />
                <SkeltonNearbyCard />
              </>
            )
          )
        }
        data={data ? data : []}
        renderItem={({ item }) => (
          <NearbyCard item={item} hadlePress={handlePress} />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ rowGap: 12 }}
        initialNumToRender={1}
      />
    </SafeAreaView>
  );
}
