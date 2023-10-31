import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import SampleImage from "@image/sampleImage.png";
import BlogStatus from "../BlogStatus";
import { BlogDetail } from "@/utils/types";
import { timeAgo } from "@/utils/dayFormat";

interface IProps {
  value: BlogDetail;
}
function PostedBlogCard({ value }: IProps) {
  const maxContentLength = 250;
  const parser = new DOMParser();
  const doc = parser.parseFromString(value.content, "text/html");
  const blogText = doc.body.textContent ?? "";
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
        className=" object-fill w-full h-[250px]"
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
        <div className="self-stretch text-justify text-[14px] font-normal text-gray-500">
          {truncatedText + "....."}
        </div>
        <div className="w-full flex justify-between items-center ">
          <div className="w-full flex gap-2 items-center">
            <Button
              textContent="Preview"
              icon="arrowRight"
              iconPosition="right"
              backgroundColor="bg-[#0066B2]"
              href={`/blog/preview/${value.blog_id}`}
              tailwind="hover:opacity-80"
            ></Button>
            <div className="text-gray-500 text-[12px] cursor-default font-medium">
              {value.published_at === null
                ? timeAgo(value.created_at)
                : timeAgo(value.published_at)}
            </div>
          </div>
          <BlogStatus status={value.status}></BlogStatus>
        </div>
      </div>
    </div>
  );
}

export default PostedBlogCard;
