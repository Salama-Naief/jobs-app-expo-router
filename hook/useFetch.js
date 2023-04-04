import react, { useState, useEffect } from "react";
//import { RAPID_API_KEY } from "@env";
import axios from "axios";

const rapidApiKey = "";
const useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [no_of_page, setNo_Of_Page] = useState(0);
  const [error, setError] = useState("");

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };
  const fetchData = () => {
    setIsLoading(true);
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.data);
        setNo_Of_Page(response.data.parameters.num_pages);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        setError(error.response.data.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch, no_of_page };
};
export default useFetch;
