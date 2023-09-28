import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  GET: "/users/userInfo/",
};

export const getMemberInfo = (user_id: string, access_token: string | null) => {
  return axiosClient.get(`${END_POINT.GET}${user_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
