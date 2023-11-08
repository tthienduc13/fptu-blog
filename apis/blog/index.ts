import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  CREATE: "/blogs/create",
  CREATE_BLOG_TAGS: "/blogs/create/blog-tags",
  GET_POSTED: "/blogs/posted/",
  GET_PENDING: "/blogs/pending",
  GET_BY_ID: "/blogs/",
  GET_BLOG_TAGS: "/blogs/blog-tags/",
  APPROVE: "/blogs/approve/",
  REJECT: "/blogs/reject/",
  SEARCH: "/blogs/search",
};

type createBlog = {
  user_id: string;
  blogTitle: string;
  category_id: string;
  htmlString: string;
  status: number;
  visual: string | undefined | null;
};

type blogTags = {
  blog_id: string;
  tags: string[];
};

type blogSearch = {
  search: string;
  category_id: string;
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
  } catch (error: any) {
    return {
      success: false,
      message: "Failed to create a blog",
      error: error.message,
    };
  }
};

export const createBlogTags = (payload: blogTags) => {
  return axiosClient.post(END_POINT.CREATE_BLOG_TAGS, {
    blog_id: payload.blog_id,
    tags: payload.tags,
  });
};

export const getPostedBlog = (
  user_id: string,
  access_token: string | null,
  page: number
) => {
  return axiosClient.get(`${END_POINT.GET_POSTED}${user_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
    params: { page },
  });
};

export const getPendingBlog = (access_token: string | null, page: number) => {
  return axiosClient.get(`${END_POINT.GET_PENDING}`, {
    headers: { Authorization: `Bearer ${access_token}` },
    params: { page },
  });
};

export const getBlogByID = (blog_id: string, access_token: string | null) => {
  return axiosClient.get(`${END_POINT.GET_BY_ID}${blog_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const getBlogTags = (blog_id: string, access_token: string | null) => {
  return axiosClient.get(`${END_POINT.GET_BLOG_TAGS}${blog_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const approveBlog = (blog_id: string, access_token: string | null) => {
  return axiosClient.patch(`${END_POINT.APPROVE}${blog_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const rejectBlog = (blog_id: string, access_token: string | null) => {
  return axiosClient.patch(`${END_POINT.REJECT}${blog_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const searchBlog = (payload: blogSearch) => {
  return axiosClient.post(END_POINT.SEARCH, {
    search : payload.search,
    category_id: payload.category_id,
  });
};
