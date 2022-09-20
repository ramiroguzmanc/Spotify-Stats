import axios from "axios";

export const spotifyApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});
