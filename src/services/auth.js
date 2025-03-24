import {apiClient} from "./Config"

export const apiRegisterUser = (payload) => {
    return apiClient.post("/register",payload)
};

export const apiUserLogin = (payload) => apiClient.post("/login", payload);