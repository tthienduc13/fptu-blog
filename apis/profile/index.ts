import axiosClient from "@/utils/axiosClient/index";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
export const END_POINT = {
  GET: "/users/profile/",
  MANAGE: "/users/profile/",
  UPDATE_AVATAR: "/users/profile/update-avatar/",
  UPDATE_PROFILE: "/users/profile/update-info/",
  GET_INFO: "/users/profile-info/",
  UPDATE_BIO: "/users/profile/update-bio/",
};

type updateData = {
  first_name: string;
  last_name: string;
  department: string;
  major: string;
};

export const getAllMember = (access_token: string | null) => {
  return axiosClient.get(`${END_POINT.GET}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const getMemberInfo = (
  user_id: string | RequestCookie,
  access_token: string | null | RequestCookie
) => {
  return axiosClient.get(`${END_POINT.GET}${user_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const updateAvatar = (image: string, user_id: string) => {
  return axiosClient.post(`${END_POINT.UPDATE_AVATAR}${user_id}`, {
    image: image,
  });
};

export const updateInfo = (payload: updateData, user_id: string) => {
  return axiosClient.post(`${END_POINT.UPDATE_PROFILE}${user_id}`, {
    first_name: payload.first_name,
    last_name: payload.last_name,
    department: payload.department,
    major: payload.major,
  });
};

export const getUserData = (
  user_id: string | RequestCookie,
  access_token: string | null | RequestCookie
) => {
  return axiosClient.get(`${END_POINT.GET_INFO}${user_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const updateAbout = (bio: string, user_id: string) => {
  return axiosClient.patch(`${END_POINT.UPDATE_BIO}${user_id}`, {
    bio: bio,
  });
};
