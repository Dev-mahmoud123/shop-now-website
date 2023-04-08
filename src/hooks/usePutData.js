import {baseURL} from "../api/baseURL"

const usePutData = async (url , formData)=> {
     const config= {
         headers: {
            lang: "en",
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,   
         }
      }
      const response = await baseURL.put(url , formData , config);
      return response;
}

export default usePutData;