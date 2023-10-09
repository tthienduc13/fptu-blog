export type userInfo = {
  first_name: string;
  last_name: string;
  email: string;
  image: string;
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

export type blog = {
  blog_id: string;
  user_id: string;
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
