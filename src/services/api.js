// import Twit from "twit";
import axios from "axios";


 const token= 'AAAAAAAAAAAAAAAAAAAAAPANWgEAAAAACfhgNTMpNVRK5SHc45gjhdghmpw%3DU7l2hcx9nu5xPp7Q6wCOOi9lPpc9Uojmbb26DAG4v09LOcpWp3'
 const api_key = '88dCUlUnQPrsmXwgCfeVHBzyk'
 const api_key_secrete = 'JbUEQMmalLfYhHxFYszLGynXcd6dWanX0b36NtbNCyX2pm9xIB'
 const access_token = '1466221618120830977-e85ls9INUkALLD63srcUiGH30RCY23'
 const access_token_secret = 'fkCXsORkSfg0AYY5fpFQuTlcVwGagoMUQl3GmE9hWGRGq'


const api = axios.create({
  // baseURL: 'https://api.twitter.com/2/',
  baseURL: 'https://localhost:8080/2/',
  headers: {
    //    api_key  :        'l6gmMG4TI1vhFUQzMj54SJPtr',
    //  api_secret:     'TSuB6sQNZnulJXI13TiHvwl4rWwhqdnLvOQhvwx4bDn69PXdvh',
    //   access_token:       '1466221618120830977-aYA55JjBmwGraSG3wOf4UWlpctq6eL',
    //  access_token_secret:  'ecLjU8PCcXkkKTZUAUbbw2XMdDPIv9rq4gV6Zpq1ELXv9',
    
    Authorization: 'Bearer ' + token
   }
  })
export default api

