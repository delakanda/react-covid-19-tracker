import { Method } from "axios";

export type AxiosCallParams = {
  method: Method;
  url: string;
  params?: object;
  data?: any;
  headers?: object;
};