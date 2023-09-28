import React, { useState, useEffect } from "react";
import BlogTagField from "./TagField";
import axios from "axios";
import { getCookie } from "cookies-next";
import { getAllTag } from "@/apis/tag";
import { Skeleton } from "@mui/material";
type tag = {
  tag_id: number;
  category_id: number;
  title: string;
};
function BlogTag() {
  const allowTagNumber: number = 30;
  const placeholder = "Enter Tag...";
  const [blogTags, setBlogTags] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  useEffect(() => {
    const hanldeGetAllCategoryData = async () => {
      try {
        const access_token = getCookie("accessToken");
        if (access_token) {
          const response = await getAllTag(access_token);
          const data = response.data;
          const titles = data.map((tag: tag) => tag.title);
          console.log(titles);
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
      <h3 className="text-base text-[#14375F] font-medium">Add Tag</h3>
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

export default BlogTag;
