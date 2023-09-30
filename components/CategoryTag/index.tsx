import React, { useState, useEffect } from "react";
import BlogTagField from "@component/BlogTag/TagField";
import axios from "axios";
import { getCookie } from "cookies-next";
import { getAllCategory } from "@/apis/category";
import { Skeleton } from "@mui/material";
type category = {
  category_id: number;
  title: string;
  description: string;
};
function CategoryTag() {
  const allowTagNumber: number = 1;
  const placeholder = "Enter Category...";
  const [blogTags, setBlogTags] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const hanldeGetAllCategoryData = async () => {
      try {
        const access_token = getCookie("accessToken");
        if (access_token) {
          const response = await getAllCategory(access_token);
          const data = response.data;
          const titles = data.map((category: category) => category.title);
          setSuggestions(titles);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
        }
      }
    };
    hanldeGetAllCategoryData();
  }, []);

  return (
    <div className="flex flex-col gap-[8px]">
      <div>
        <h3 className="text-base text-[#14375F] font-medium">Add Category</h3>
      </div>
      {suggestions.length > 0 ? (
        <div className="border-gray-300 rounded-[12px] w-full border-2 ">
          <BlogTagField
            allowTagNumber={allowTagNumber}
            suggestions={suggestions}
            state={blogTags}
            setState={setBlogTags}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <div className="border-gray-300 rounded-[12px] w-full border-2 overflow-hidden">
          <Skeleton
            sx={{ bgcolor: "grey.100" }}
            variant="rectangular"
            animation="wave"
            height={51}
          ></Skeleton>
        </div>
      )}
    </div>
  );
}

export default CategoryTag;
