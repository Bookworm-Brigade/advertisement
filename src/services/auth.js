
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

export const apiUpdateUser = (payload) => {
    return apiClient.post("/users/updateUser", payload,
      {
        headers: {
            "Content-Type": "application/json",
        },
      }  
    );
};
