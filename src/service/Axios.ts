import AxiosClient, { AxiosRequestConfig } from "axios";
import { RAPID_API_BASE_URL } from "../utils/RapidApi";
import { AxiosCallParams } from "../types/AxiosTypes";

export default (params: AxiosCallParams) => {
  let axiosOpts: AxiosRequestConfig = {
    method: params.method,
    baseURL: RAPID_API_BASE_URL,
    params: params.params,
    headers: {
      Accept: "application/json",
      "x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
	    "x-rapidapi-key": "05da87b23cmsh80bdf4169daf8e6p16db8ajsn8d7b83802d1c",
      ...params.headers
    },
    url: params.url,
    data: params.data
  };

  return AxiosClient(axiosOpts).then((res) => {
    return res.data.data;
  }).catch((err) => {
    return err.response;
  });
}