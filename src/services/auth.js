
import { apiClient } from "./Config";

export const apiRegisterUser = (payload) => {
    return apiClient.post("/register", payload)
};

export const apiUserLogin = (payload) => {
    return apiClient.post("/login", payload,
        {
            headers: {
                "Content-Type": "application/json",
            },
        });
};
