
import { apiClient } from "./Config";

export const apiRegisterUser = (payload) => {
    return apiClient.post("/users/register", payload)
};

export const apiUserLogin = (payload) => {
    return apiClient.post("/users/login", payload,
        {
            headers: {
                "Content-Type": "application/json",
            },
        });
};
