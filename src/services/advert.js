import { apiClient } from "./Config";

export const apiAddAdvert = (payload) =>
  apiClient.post("/advert", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const apiAllAdvert = () => apiClient.get("/advert");

export const apiUpdateAdvert = (id, payload) =>
  apiClient.put(`/advert/$(id)`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const apiSingleAdvert = (id) =>
  apiClient.get(`/advert/${id}`, {
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });

  export const apiDeleteAdvert = (id) =>
    apiClient.delete(`/advert/${id}`);

// export const apiGetSingleAdvert = (id) => apiClient.get(`/adverts/$(id)`);
