import axios from "axios";


const useDeleteData = async (url) => {
  const config = {
    headers: {
      lang: "en",
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.delete(url, config);
  return response;
};

export default useDeleteData;