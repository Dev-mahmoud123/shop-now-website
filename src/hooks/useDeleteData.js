import baseURL from "../api/baseURL";

const useDeleteData = async (url) => {
  const config = {
    headers: {
      lang: "en",
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
  const response = await baseURL.delete(url, config);
  return response;
};

export default useDeleteData;