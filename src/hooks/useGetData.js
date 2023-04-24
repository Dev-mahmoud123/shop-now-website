import axios from "axios";


export const useGetData = async (url) => {
  const config = {
    headers: {
      lang: "en",
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
  };

  const response = await axios.get(url, config);
  return response;
};

//
export const useGetDataWithoutHeaders = async (url) => {
  const response = await axios.get(url);
  return response;
};

export const useGetDataWithLanguage = async (url) => {
  const config = {
    headers: {
      lang: "en",
    },
  };
  const response = await axios.get(url, config);
  return response;
};

