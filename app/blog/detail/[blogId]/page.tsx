"use client";
import React, { useState } from "react";
import { BlogDetail } from "@/utils/types";
import Content from "@/components/sections/detail/Content";
import RelatedBlog from "@/components/sections/detail/Related";
import Comment from "@/components/sections/detail/Comment";
function BlogDetail() {
  const [blogData, setBlogData] = useState<BlogDetail>();

  return (
    <>
      <main className="absolute w-full flex flex-col gap-[20px] right-0 top-[56px] lg:top-[64px] bottom-0 h-fit p-[20px] lg:p-[40px]">
        <Content setBlogData={setBlogData} blogData={blogData}></Content>
        <Comment></Comment>
        <RelatedBlog></RelatedBlog>
      </main>
    </>
  );
}

export default BlogDetail;
