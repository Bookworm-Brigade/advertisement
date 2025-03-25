
import { apiClient } from "./Config";

export const apiRegisterUser = (payload) => {
    return apiClient.post("/signup", payload)
};

export const apiUserLogin = (payload) => {
    return apiClient.post("/log", payload,
        {
            headers: {
                "Content-Type": "application/json",
            },
        });
};
