import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  GET: "/users/profile/",
  MANAGE: "/user/profile/",
  DELETE: "/user/profile/",
};

export const getAllMember = (access_token: string | null) => {
  return axiosClient.get(`${END_POINT.GET}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const getMemberInfo = (user_id: string, access_token: string | null) => {
  return axiosClient.get(`${END_POINT.GET}${user_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const deleteUser = (user_id: string, access_token: string | null) => {
  return axiosClient.delete(`${END_POINT.GET}${user_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
