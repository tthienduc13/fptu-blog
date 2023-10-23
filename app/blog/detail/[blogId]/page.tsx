"use client";
import React, { useState } from "react";
import { BlogDetail } from "@/utils/types";
import Content from "@/components/sections/detail/Content";
import RelatedBlog from "@/components/sections/detail/Related";
import Comment from "@/components/sections/detail/Comment";
import io from "socket.io-client";
const socket = io("http://localhost:5000");

function BlogDetail() {
  const [blogData, setBlogData] = useState<BlogDetail>();
  return (
    <>
      <main className="absolute w-full flex flex-col gap-[20px] right-0 top-[56px] lg:top-[64px] bottom-0 h-fit p-[20px] lg:p-[40px]">
        <Content
          socket={socket}
          setBlogData={setBlogData}
          blogData={blogData}
        ></Content>
        <RelatedBlog></RelatedBlog>
        <Comment socket={socket}></Comment>
      </main>
    </>
  );
}

export default BlogDetail;
