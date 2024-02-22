import axios from "axios";
import { axiosBaseURL } from "@/config";

export const axiosQuery = axios.create({
  baseURL: axiosBaseURL,
});