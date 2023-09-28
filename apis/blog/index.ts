import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  CREATE: "/blogs/create",
};

type createBlog = {
  user_id: string;
  blogTitle: string;
  htmlString: string;
  status: number;
  visual: string;
};

export const createBlog = (payload: createBlog) => {
  return axiosClient.post(END_POINT.CREATE, {
    user_id: payload.user_id,
    blogTitle: payload.blogTitle,
    content: payload.htmlString,
    status: 0,
    visual: payload.visual,
  });
};
