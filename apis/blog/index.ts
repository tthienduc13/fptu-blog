import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  CREATE: "/blogs/create",
  CREATE_BLOG_TAGS: "/blogs/create/blog-tags",
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

type blogTags = {
  blog_id: string;
  tags: string[];
};

export const createBlog = async (payload: createBlog) => {
  try {
    const response = await axiosClient.post(END_POINT.CREATE, {
      user_id: payload.user_id,
      blogTitle: payload.blogTitle,
      category_id: payload.category_id,
      content: payload.htmlString,
      status: 0,
      visual: payload.visual,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostedBlog = (user_id: string, access_token: string | null) => {
  return axiosClient.get(`${END_POINT.GET_POSTED}${user_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const createBlogTags = (payload: blogTags) => {
  return axiosClient.post(END_POINT.CREATE_BLOG_TAGS, {
    blog_id: payload.blog_id,
    tags: payload.tags,
  });
};
