import {baseURL} from "../api/baseURL"

const usePostDataWithToken = async (url , formData)=> {
     const config= {
         headers: {
            lang: "en",
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,   
         }
      }
      const response = await baseURL.post(url , formData , config);
      return response;
}
const usePostData = async (url , formData)=> {
     const config= {
         headers: {
            lang: "en",
            "Content-Type": "application/json",   
         }
      }
      const response = await baseURL.post(url , formData , config);
      return response;
}

export {usePostData , usePostDataWithToken}