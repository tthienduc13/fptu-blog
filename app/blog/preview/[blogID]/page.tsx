"use client";
import React, { useEffect, useState } from "react";
import SampleImage from "@image/sampleImage.png";
import BackIcon from "@icons/page/blog/backIcon.svg";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import ClockIcon from "@icons/page/blog/clockIcon.svg";
import AvatarIcon from "@icons/page/blog/avatarIcon.svg";
import TagIcon from "@icons/page/blog/tagIcon.svg";
import BlogStatus from "@/components/BlogStatus";
import { getCookie } from "cookies-next";
import { BlogDetail } from "@/utils/types";
import { getBlogByID } from "@/apis/blog";
import { formatDateDetail } from "@/utils/dayFormat";
function DetailBLogList() {
  const [blogData, setBlogData] = useState<BlogDetail>();
  const router = useRouter();
  const param = useParams();
  const hanldeGetPost = async () => {
    try {
      const access_token = getCookie("accessToken");
      const blog_id = param.blogID as string;
      if (access_token && blog_id) {
        const blogResponse = await getBlogByID(blog_id, access_token);
        setBlogData(blogResponse.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    hanldeGetPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <main className="absolute w-full flex flex-col gap-[20px] right-0 top-[56px] lg:top-[64px] bottom-0 h-fit p-[20px] lg:p-[40px]">
        <div className="w-full  flex items-center justify-between">
          <h1 className=" relative md:text-[30px] text-[#14375F] md:leading-[45px] text-3xl  font-bold select-none">
            Preview
          </h1>
          <div
            onClick={() => router.back()}
            className=" w-1/5 flex justify-end items-center gap-[6px] cursor-pointer hover:gap-[10px] duration-300"
          >
            <Image
              src={BackIcon}
              className="md:h-[20px] md:w-[20px] w-[16px] h-[16px]"
              height={20}
              width={20}
              alt="Back"
            ></Image>
            <div className="text-[#707070] text-base md:text-xl md:leading-[24px] font-medium ">
              Go Back
            </div>
          </div>
        </div>
        <div className="w-full h-full p-5 flex flex-col gap-4 rounded-[10px]  border-[2px]">
          <h1 className="w-full font-bold  text-3xl">{blogData?.blog_title}</h1>
          {/* Author */}
          <div className="w-full flex-col flex gap-1">
            <div className="w-full flex items-center  gap-[10px]">
              <Image
                src={AvatarIcon}
                alt="avatar by default"
                height={20}
                width={20}
              ></Image>
              <div className="text-gray-500 cursor-default text-base font-normal">
                {blogData?.user_name}
              </div>
            </div>
            <div className="w-full  flex items-center  gap-[10px]">
              <Image
                src={ClockIcon}
                alt="avatar by default"
                height={20}
                width={20}
              ></Image>
              <div className="text-gray-500 cursor-default text-base font-normal">
                {blogData?.created_at && formatDateDetail(blogData?.created_at)}
              </div>
            </div>
          </div>
          {/* Category and Tag */}
          <div className="w-full flex-col flex gap-2">
            <div className="flex w-full items-center gap-2">
              <Image src={TagIcon} alt="Tag" height={24} width={24}></Image>
              <div className="bg-blue-100 cursor-default rounded-[6px] text-blue-800 text-sm px-[10px] py-1 font-medium">
                {blogData?.category_description}
              </div>
            </div>
            <div className="flex w-full items-center gap-2">
              <Image src={TagIcon} alt="Tag" height={24} width={24}></Image>
              <div className="w-full flex items-center gap-[10px]">
                {blogData?.tag_titles.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-green-100 cursor-default rounded-[6px] text-green-800 text-sm px-[10px] py-1 font-medium"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="w-full flex items-center object-cover flex-col gap-4">
            <Image
              className="object-contain max-w-[1200px] max-h-[500px]"
              src={blogData?.visual ? blogData.visual : SampleImage}
              width={1200}
              height={600}
              alt="image of blog"
            ></Image>
            <div
              className="w-full text-justify"
              dangerouslySetInnerHTML={{ __html: blogData?.content as string }}
            ></div>
          </div>
          <div className="w-full flex justify-end">
            <BlogStatus status={blogData?.status}></BlogStatus>
          </div>
        </div>
      </main>
    </>
  );
}

export default DetailBLogList;
