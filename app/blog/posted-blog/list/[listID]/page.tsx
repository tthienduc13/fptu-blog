"use client";

import React, { useEffect } from "react";
import PostedBlogCard from "@/components/PostedBlogCard";

import { useState } from "react";
import Pagination from "@component/Pagination";
import { getCookie } from "cookies-next";
import { getPostedBlog } from "@/apis/blog";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import axios from "axios";
import { BlogData } from "@/utils/types";
interface pageProps {
  params: { listID: string };
}

function YourBlog({ params }: pageProps) {
  const [blogData, setBLogData] = useState<BlogData[]>([]);
  const [filter, setFilter] = useState<string>("3");

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div onClick={() => setFilter("3")}>All Blogs</div>,
    },
    {
      key: "2",
      label: <div onClick={() => setFilter("0")}>Pending Blogs</div>,
    },
    {
      key: "3",
      label: <div onClick={() => setFilter("1")}>Approved Blogs</div>,
    },
    {
      key: "4",
      label: <div onClick={() => setFilter("2")}>Expired Blogs</div>,
    },
  ];

  const hanldeGetPostedBlogs = async () => {
    try {
      const access_token = getCookie("accessToken");
      if (access_token) {
        const userId = getCookie("user_id");
        if (userId) {
          const response = await getPostedBlog(userId, access_token);
          const allBlogs = 3;
          if (filter !== allBlogs.toString()) {
            const filteredBlogs = response.data.filter(
              (blog: BlogData) => blog.status === parseInt(filter)
            );
            setBLogData(filteredBlogs);
          } else setBLogData(response.data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

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
            <div className="w-full flex items-center justify-between  mb-5">
              <h1 className="text-[#14375F] font-bold md:text-[30px] md:leading-[45px] text-2xl">
                Your Blogs
              </h1>
              <Dropdown menu={{ items }} placement="bottomRight" arrow>
                <Button>Filter</Button>
              </Dropdown>
            </div>
            <div className="w-full flex md:flex-row sm:flex-col lg:gap-y-[30px] sm:gap-y-4 flex-wrap lg:gap-x-[30px] sm:gap-x-4 ">
              {blogData !== null ? (
                blogData.map((data, index) => (
                  <PostedBlogCard key={index} value={data}></PostedBlogCard>
                ))
              ) : (
                <h1 className="text-[#14375F] font-bold md:text-[30px] md:leading-[45px] text-2xl">
                  No data display
                </h1>
              )}
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
