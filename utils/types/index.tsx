export type userInfo = {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  bio: string; 
};

export type dataTypeAdmin = {
  key: React.Key;
  user_id: string;
  fullName: string;
  role: string;
  department: string;
  email: string;
  major: string;
  moderateStatus: string;
  isVerified: string;
  description: string;
};

export type columnItem = {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role_id: number;
  department: string;
  major: string;
  moderateStatus: boolean;
  isVerified: boolean;
  bio: string;
};

export type blogCategory = {
  category_id: string;
  title: string;
  description: string;
};

export type blogTags = {
  tag_id: string;
  category_id: string;
  title: string;
};

export type BlogData = {
  blog_id: string;
  user_id: string;
  blog_title: string;
  category_id: string;
  content: string;
  status: number;
  view: number;
  visual: string | null;
  created_at: string;
  published_at: string;
};
