import api from "./api";

// Login user
export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

// Logout user
export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

// Refresh token → tidak perlu kirim body lagi
export const refreshToken = async () => {
  const response = await api.post("/auth/refresh-token");
  return response.data;
};

// Register new user
export const register = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};
