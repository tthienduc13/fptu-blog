"use client";

import React, { useEffect } from "react";
import PendingBlogCard from "@/components/PendingBlogCard";
import { useState } from "react";
import Pagination from "@component/Pagination";
import { getCookie } from "cookies-next";
import { getPendingBlog, rejectBlog } from "@/apis/blog";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { approveBlog } from "@/apis/blog";
import { toast } from "react-toastify";
import axios from "axios";
import { BlogData } from "@/utils/types";
interface pageProps {
  params: { listID: string };
}

function PendingBlog({ params }: pageProps) {
  const [blogData, setBlogData] = useState<BlogData[]>([]);

  useEffect(() => {
    const handleGetPendingBlogs = async () => {
      try {
        const access_token = getCookie("accessToken");
        if (access_token) {
          const userId = getCookie("user_id");
          if (userId) {
            const response = await getPendingBlog(access_token);
            setBlogData(response.data);
          }
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
        }
      }
    };
    handleGetPendingBlogs();
  }, []);

  const removeCheckedBlog = (blog_id: string) => {
    setBlogData((prevData: BlogData[]) =>
      prevData.filter((blog: BlogData) => blog.blog_id !== blog_id)
    );
  };
  const currentUserRole = useSelector(
    (state: RootState) => state.user.currentUser.UserRole
  );
  const hanldeApproveBlog = async (blogId: string) => {
    try {
      const accessToken = getCookie("accessToken");
      if (accessToken) {
        if (currentUserRole === 2) {
          const approveResponse = await approveBlog(blogId, accessToken);
          toast.success("Blog approved!");
          removeCheckedBlog(blogId);
        }
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 500) {
          toast.error(error.response.data);
        }
      }
    }
  };

  const handleRejectBlog = async (blogId: string) => {
    try {
      const accessToken = getCookie("accessToken");
      if (accessToken) {
        if (currentUserRole === 2) {
          const approveResponse = await rejectBlog(blogId, accessToken);
          toast.success("Blog rejected!");
          removeCheckedBlog(blogId);
        }
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 500) {
          toast.error(error.response.data);
        }
      }
    }
  };

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
                Pending Blogs
              </h1>
            </div>
            <div className="w-full flex md:flex-row sm:flex-col lg:gap-y-[30px] sm:gap-y-4 flex-wrap lg:gap-x-[30px] sm:gap-x-4 ">
              {blogData.map((data, index) => (
                <PendingBlogCard
                  functionApprove={hanldeApproveBlog}
                  functionReject={handleRejectBlog}
                  key={index}
                  value={data}
                ></PendingBlogCard>
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

export default PendingBlog;
