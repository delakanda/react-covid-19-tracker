import AxiosClient, { AxiosRequestConfig } from "axios";
import { RAPID_API_BASE_URL, X_RAPID_API_KEY, X_RAPID_API_HOST } from "../utils/RapidApi_Env";
import { AxiosCallParams } from "../types/AxiosTypes";

export default (params: AxiosCallParams) => {
  let axiosOpts: AxiosRequestConfig = {
    method: params.method,
    baseURL: RAPID_API_BASE_URL,
    params: params.params,
    headers: {
      Accept: "application/json",
      "x-rapidapi-host": X_RAPID_API_HOST,
	    "x-rapidapi-key": X_RAPID_API_KEY,
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