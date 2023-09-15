import React, { useState } from "react";
import BlogTagField from "@component/BlogTag/TagField";

function BlogTag() {
  const placeholder = "Enter Category...";
  const suggestions = ["Sofware(SE)", "Language(SA)", "Business(SS)"];

  const [blogTags, setBlogTags] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-[8px]">
      <div>
        <h3 className="text-base text-[#14375F] font-medium">Add Category</h3>
      </div>
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
