import { apiClient } from "./Config";

export const apiAddAdvert = (payload) => apiClient.post("/advert", payload);

export const apiAllAdvert = () => apiClient.get("/advert");

export const apiUpdateAdvert = (id, payload) =>apiClient.put(`/adverts/$(id)`, payload);

export const apiGetSingleAdvert = (id) => apiClient.get(`/adverts/$(id)`);

