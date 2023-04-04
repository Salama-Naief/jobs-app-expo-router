import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import JobAbout from "./JobAbout";

const About = ({ data }) => {
  const [tabSelected, setTabSelected] = useState(tapsArray[0]);

  const displayTabContent = () => {
    switch (tabSelected) {
      case tapsArray[0]:
        {
          return (
            <JobAbout data={data?.job_description ?? "No description found"} />
          );
        }

        break;

      default:
        break;
    }
  };
  return (
    <View>
      <Taps setTabSelected={setTabSelected} tabSelected={tabSelected} />
      {displayTabContent()}
    </View>
  );
};

export default About;
