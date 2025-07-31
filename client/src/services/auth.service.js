import api from "./api";
import TokenService from "./token.service";

const API_URL = import.meta.env.VITE_AUTH_AP;

const register = async (username, name, email, password) => {
  return await api.post(API_URL + "signup", {
    username,
    name,
    email,
    password,
  });
};

const login = async (usename, password) => {
  const response = await api.post(API_URL + "signin", { usename, password });
  //ถ้าไม่มีข้อมูล ก็จะไม่save ลง local storage
  if (!response.data.token) {
    return response;
  }
  TokenService.setUser(response.data);
};

const logout = () => {
  TokenService.removeUser();
};

const AuthService = {
  register,
  login,
  logout,
};
export default AuthService;
