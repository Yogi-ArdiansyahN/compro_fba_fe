import api from "./api";

// get sections
export const getSections = async () => {
  const response = await api.get("/sections");
  return response.data;
};
