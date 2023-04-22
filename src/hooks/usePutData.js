import axios from "axios";


const usePutData = async (url , formData)=> {
     const config= {
         headers: {
            lang: "en",
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,   
         }
      }
      const response = await axios.put(url , formData , config);
      return response;
}

export default usePutData;