import { apiClient } from "./Config";

export const apiRegisterUser = (payload) => {
  return apiClient.post("/users/register", payload,{
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const apiUserLogin = (payload) => {
  return apiClient.post("/users/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const apiUpdateUser = (id, payload) => {
  return apiClient.post(`/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
