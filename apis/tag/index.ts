import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  GET_ALL: "/blogs/tags",
};

export const getAllTag = (access_token: string | null) => {
  return axiosClient.get(END_POINT.GET_ALL, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
