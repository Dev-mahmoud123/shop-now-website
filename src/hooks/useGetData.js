import axios from "axios";


const useGetData = async (url) => {
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

export default useGetData;