import axiosClient from "@/utils/axiosClient/index";
;

export const END_POINT = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  ME: "auth/me",
  TOKEN: "/auth/refresh-token",
  RESET: "/auth/change-password",
};

type UserLogin = {
  email: string;
  password: string;
  remember: boolean;
};

type UserChange = {
  email: string;
  newPassword: string;
  oldPassword: string;
};
type Token = {
  AccessToken: string;
};

type LoginResponse = {
  token: string;
  responseStatus: boolean;
  authErrors: [];
  returnTime: string;
};

type UserRegister = {
  email: string;
  password: string;
};

export const loginAccount = (payload: UserLogin) => {
  return axiosClient.post<LoginResponse>(END_POINT.LOGIN, {
    email: payload.email,
    password: payload.password,
    RememberMe: payload.remember,
  });
};
export const registerAccount = (payload: UserRegister) => {
  return axiosClient.post(END_POINT.REGISTER, {
    email: payload.email,
    password: payload.password,
  });
};

export const resetAccount = (payload: UserChange) => {
  return axiosClient.patch(END_POINT.RESET, {
    email: payload.email,
    oldPassword: payload.oldPassword,
    newPassword: payload.newPassword,
  });
};
