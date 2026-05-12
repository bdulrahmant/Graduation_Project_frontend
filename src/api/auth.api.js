import axiosInstance from "./axios";

export const loginUser = async (loginData) => {
  const response = await axiosInstance.post(
    "/Auth/login",
    loginData
  );

  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axiosInstance.post(
    "/Auth/register",
    userData
  );

  return response.data;
};
