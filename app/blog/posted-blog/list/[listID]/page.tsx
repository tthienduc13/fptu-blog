"use client";

import React, { useEffect, useState } from "react";
import PostedBlogCard from "@/components/PostedBlogCard";
import { getCookie } from "cookies-next";
import { getPostedBlog } from "@/apis/blog";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import axios from "axios";
import { BlogDetail } from "@/utils/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import PagePagination from "@/components/PagePagination";
import { LinearProgress } from "@mui/material";
interface PageProps {
  params: { listID: string };
}

function YourBlog({ params }: PageProps) {
  const pageNumber = params.listID;
  const isCollapsed = useSelector((state: RootState) => state.app.isCollapsed);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
  const [blogData, setBLogData] = useState<BlogDetail[]>([]);
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

  const hanldeGetPostedBlogs = async (page: number) => {
    try {
      const access_token = getCookie("accessToken");
      if (access_token) {
        const userId = getCookie("user_id");
        if (userId) {
          const response = await getPostedBlog(userId, access_token, page);
          const allBlogs = 3;
          if (filter !== allBlogs.toString()) {
            const filteredBlogs = response.data.data.filter(
              (blog: BlogDetail) => blog.status === parseInt(filter)
            );
            setBLogData(filteredBlogs);
          } else {
            setBLogData(response.data.data);
            setTotalPages(response.data.total_pages);
          }
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    hanldeGetPostedBlogs(Number(pageNumber));
    setIsFetchingData(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <main
        className={`${
          isCollapsed ? "lg:w-[calc(100%-90px)]" : "lg:w-[calc(100%-200px)]"
        } absolute w-full duration-300 flex flex-col gap-[20px] right-0 top-[56px] lg:top-[64px] bottom-0 h-fit p-[20px] lg:p-[40px]`}
      >
        {isFetchingData ? (
          <LinearProgress></LinearProgress>
        ) : (
          <div className="w-full h-full ">
            <div className="mb-[40px] flex flex-col gap-5 w-full">
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
                  blogData.map((data) => (
                    <PostedBlogCard
                      key={data.blog_id}
                      value={data}
                    ></PostedBlogCard>
                  ))
                ) : (
                  <h1 className="text-[#14375F] font-bold md:text-[30px] md:leading-[45px] text-2xl">
                    No data display
                  </h1>
                )}
              </div>
              <div className="w-full flex justify-end mt-5">
                <PagePagination
                  totalPages={totalPages}
                  currentPage={pageNumber}
                  route={"/blog/posted-blog/list/"}
                ></PagePagination>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default YourBlog;
