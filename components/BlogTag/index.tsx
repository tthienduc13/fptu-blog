import React, { useState } from "react";
import BlogTagField from "./TagField";

function BlogTag() {
  const placeholder = "Enter Tag...";
  const suggestions = [
    "Sofware Engineering",
    "Information",
    "AI",
    "Information Security",
    "Digital Art Design",
    "Digital Marketing",
    "Internation Bussisness",
    "Hotel Management",
    "Multimedia",
    "Finance",
    "Tourism",
    "English",
    "Chinese",
    "Japanese",
    "Korean",
  ];

  const [blogTags, setBlogTags] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-[8px]">
      <h3 className="text-base text-[#14375F] font-medium">Add Tag</h3>
      <div className="border-gray-300 rounded-[12px] w-ful border-2 ">
        <BlogTagField
          suggestions={suggestions}
          state={blogTags}
          setState={setBlogTags}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default BlogTag;
