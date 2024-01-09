import axios from 'axios';
const Baseurl =  import.meta.env.VITE_APP_BASEURLLINK;
const ApiKey = import.meta.env.VITE_APP_API_KEY;
const RapidAPIHost = import.meta.env.VITE_APP_RAPIDAPIHOST;

const options = {
    headers: {
      'X-RapidAPI-Key': ApiKey,
      'X-RapidAPI-Host': RapidAPIHost
    }
  };


  export const  fetchingApiData = async(url)=>{
        const { data } = await axios.get(`${Baseurl}${url}`,options)
        return data   
  }
