import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  CREATE: "/blogs/create",
  GET_POSTED: "/blogs/posted/",
};

type createBlog = {
  user_id: string;
  blogTitle: string;
  category_id: string;
  htmlString: string;
  status: number;
  visual: string;
};

export const createBlog = (payload: createBlog) => {
  return axiosClient.post(END_POINT.CREATE, {
    user_id: payload.user_id,
    blogTitle: payload.blogTitle,
    category_id: payload.category_id,
    content: payload.htmlString,
    status: 0,
    visual: payload.visual,
  });
};

export const getPostedBlog = (user_id: string, access_token: string | null) => {
  return axiosClient.get(`${END_POINT.GET_POSTED}${user_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
