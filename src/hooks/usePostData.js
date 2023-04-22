import axios from "axios";


export const usePostDataWithToken = async (url , formData)=> {
     const config= {
         headers: {
            lang: "en",
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,   
         }
      }
      const response = await axios.post(url , formData , config);
      return response;
}
export const usePostData = async (url , formData)=> {
     const config= {
         headers: {
            lang: "en",
            "Content-Type": "application/json",   
         }
      }
      const response = await axios.post(url , formData , config);
      return response;
}

