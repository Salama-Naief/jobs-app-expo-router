import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetch from "../../hook/useFetch";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Header, Footer, About, Company } from "../../components/job-details";
import Taps from "../../components/job-details/Tabs";
import JobAbout from "../../components/job-details/JobAbout";
import Specifics from "../../components/job-details/Specifics";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  const { data, error, isLoading } = useFetch("job-details", {
    job_id: params.id,
  });
  const [tabSelected, setTabSelected] = useState("About");

  const displayTabContent = () => {
    switch (tabSelected) {
      case "About":
        return (
          <JobAbout data={data[0]?.job_description ?? "No description found"} />
        );
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            data={data[0]?.job_highlights?.Qualifications ?? ["N/O"]}
          />
        );
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            data={data[0]?.job_highlights?.Responsibilities ?? ["N/O"]}
          />
        );
      default:
        break;
    }
  };

  return (
    <SafeAreaView className="p-4 flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text className="text-red-600">{error}</Text>
        ) : data.length < 0 ? (
          <Text className="text-red-600">{error}</Text>
        ) : (
          <>
            <Company
              companyLogo={data[0]?.employer_logo}
              jobTitle={data[0]?.job_title}
              companyName={data[0]?.employer_name}
              location={data[0]?.job_country}
              postedAt={data[0]?.job_posted_at_datetime_utc}
              expiredAt={data[0]?.job_offer_expiration_datetime_utc}
              jobType={data[0]?.job_employment_type}
            />
            <Taps setTabSelected={setTabSelected} tabSelected={tabSelected} />
            {displayTabContent()}
          </>
        )}
      </ScrollView>
      <Footer
        url={
          data[0]?.job_google_link ?? "https://careers.google.com/jobs/results/"
        }
      />
    </SafeAreaView>
  );
};

export default JobDetails;
