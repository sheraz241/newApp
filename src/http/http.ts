import axios from "axios";
import { AxiosError } from "axios";
import { storage } from "./storage";
import { config } from "./config";
const http = axios.create({
  baseURL: config.baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    console.log("Retrieving token from storage");
    const token = storage.getString("token");
    console.log("Retrieved token:", token);
    console.log("Sending Request", config?.url);
    console.log("token",token)
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    if (config.headers["Content-Type"] === "multipart/form-data") {
      // Set Content-Type to multipart/form-data
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      // Set default Content-Type to application/json
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  // Change the type of error parameter to AxiosError
  (error: AxiosError) => {
    if (error.response) {
      console.log("Error Response Data:", JSON.stringify(error.response.data));
    } else if (error.request) {
      console.log("Error Request:", JSON.stringify(error));
    } else {
      console.log("Error Message:", error.message);
    }
    return Promise.reject((error.response?.data as any).error);
  }
);

export default http;
