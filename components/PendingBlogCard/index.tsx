import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import SampleImage from "@image/sampleImage.png";
import { BlogData, BlogDetail } from "@/utils/types";
import { timeAgo } from "@/utils/dayFormat";
import { getCategoryById } from "@/apis/category";
import { getCookie } from "cookies-next";
import { getMemberInfo } from "@/apis/profile";

interface IProps {
  value: BlogDetail;
  functionApprove: (blog_id: string) => void;
  functionReject: (blog_id: string) => void;
}
function PendingBlogCard({ value, functionApprove, functionReject }: IProps) {
  const maxContentLength = 250;
  const parser = new DOMParser();
  const doc = parser.parseFromString(value.content, "text/html");
  const blogText = doc.body.textContent || "";
  const truncatedText =
    blogText.length > maxContentLength
      ? blogText.substring(0, maxContentLength)
      : blogText;
  return (
    <div className="md:max-w-[calc((100%-60px)/3)] sm:w-full rounded-lg overflow-hidden w-full drop-shadow-lg shadow-lg">
      <Image
        src={value.visual ? value.visual : SampleImage}
        width={400}
        height={250}
        alt="image"
        className=" object-cover w-full h-[250px]"
      ></Image>
      <div className="w-full flex gap-2 flex-col p-4">
        <div className="w-full items-stretch text-[20px] leading-[25px] font-bold ">
          {value.blog_title}
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-[12px] cursor-pointer leading-[15px] text-[#0066B2] font-medium">
            {value.user_name}
          </p>
          <p className="text-[12px] cursor-pointer leading-[15px] text-[#0066B2] font-medium">
            {value.category_description}
          </p>
        </div>
        <div className="self-stretch cursor-default h-full min-h-[50px] overflow-hidden text-[14px] font-normal text-gray-500">
          {truncatedText + "...."}
        </div>
        <div className="text-gray-500 text-[12px] cursor-default font-medium">
          {timeAgo(value.created_at)}
        </div>
        <div className="w-full flex justify-between items-center">
          <Button
            textContent="Preview"
            icon="arrowRight"
            iconPosition="right"
            backgroundColor="bg-[#0066B2]"
            href={`/blog/preview/${value.blog_id}`}
            tailwind="hover:opacity-80"
          ></Button>
          <div className=" flex items-center gap-3">
            <button
              onClick={() => functionApprove(value.blog_id)}
              className="px-5 hover:opacity-80 py-[10px] bg-[#03543F] flex justify-center items-center rounded-lg text-[14px] font-medium text-white"
            >
              Approve
            </button>
            <button
              onClick={() => functionReject(value.blog_id)}
              className="px-5 hover:opacity-80 py-[10px] bg-[#C81E1E] flex justify-center items-center rounded-lg text-[14px] font-medium text-white"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingBlogCard;
