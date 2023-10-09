"use client";

import React, { useEffect } from "react";
import PostedBlogCard from "@/components/PostedBlogCard";
import { useState } from "react";
import Pagination from "@component/Pagination";
import { getCookie } from "cookies-next";
import { getPostedBlog } from "@/apis/blog";
import axios from "axios";
interface pageProps {
  params: { listID: string };
}

function YourBlog({ params }: pageProps) {
  const [blogData, setBLogData] = useState<[]>([]);
  const hanldeGetPostedBlogs = async () => {
    try {
      const access_token = getCookie("accessToken");
      if (access_token) {
        const userId = getCookie("user_id");
        if (userId) {
          const response = await getPostedBlog(userId, access_token);
          setBLogData(response.data);
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    hanldeGetPostedBlogs();
  }, []);

  const increaseIndex = 8;
  const [blogs, setBlogs] = useState(blogData.slice(0, increaseIndex + 1));
  const [countListPage, setCountListPage] = useState(
    Math.ceil(blogData.length / increaseIndex)
  );
  const pages: { param: string; startIndex: number; endIndex: number }[] = [];
  return (
    <>
      <main className=" absolute sm:w-full h-full lg:w-[calc(100%-100px)] flex flex-col justify-center right-0 top-[64px] bottom-0 ">
        <div className="w-full h-full ">
          <div className="mb-[40px] p-[20px] md:p-[40px] w-full">
            <div className="w-full  mb-5">
              <h1 className="text-[#14375F] font-bold md:text-[30px] md:leading-[45px] text-2xl">
                Your Blogs
              </h1>
            </div>
            <div className="w-full flex md:flex-row sm:flex-col lg:gap-y-[30px] sm:gap-y-4 flex-wrap lg:gap-x-[30px] sm:gap-x-4 ">
              {blogData.map((data, index) => (
                <PostedBlogCard key={index} value={data}></PostedBlogCard>
              ))}
              <Pagination
                paramID={params.listID}
                countNumberOfPage={countListPage}
                pages={pages}
                increaseIndex={increaseIndex}
                sliceSetData={setBlogs}
                data={blogData}
                route={"/posted-blog/list/"}
              ></Pagination>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default YourBlog;
