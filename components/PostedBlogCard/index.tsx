import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import SampleImage from "@image/sampleImage.png";
import BlogStatus from "../BlogStatus";
interface BLogProps {
  image: string;
  blog_title: string;
  user_id: string;
  category_id: number;
  content: string;
  created_at: string;
  status: number;
}

interface IProps {
  value: BLogProps;
}
function PostedBlogCard({ value }: IProps) {
  return (
    <div className="md:max-w-[calc((100%-60px)/3)] sm:w-full rounded-lg overflow-hidden w-full drop-shadow-lg shadow-lg">
      <Image
        src={SampleImage}
        alt="image"
        className="w-full object-cover"
      ></Image>
      <div className="w-full flex gap-2 flex-col p-4">
        <div className="w-full items-stretch text-[20px] leading-[25px] font-bold ">
          {value.blog_title}
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-[12px] cursor-pointer leading-[15px] text-[#0066B2] font-medium">
            {value.user_id}
          </p>
          <p className="text-[12px] cursor-pointer leading-[15px] text-[#0066B2] font-medium">
            {value.category_id}
          </p>
        </div>
        <div className="self-stretch cur text-[14px] font-normal text-gray-500">
          {value.content}
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex gap-2 items-center">
            <Button
              textContent="Preview"
              icon="arrowRight"
              iconPosition="right"
              backgroundColor="bg-[#0066B2]"
              href="/"
              tailwind="hover:opacity-80"
            ></Button>
            <div className="text-gray-500 text-[12px] cursor-default font-medium">
              {value.created_at}
            </div>
          </div>
          <BlogStatus
            status={
              value.status === 0
                ? "Pending"
                : value.status === 1
                ? "Approved"
                : value.status === 2
                ? "Expired"
                : ""
            }
          ></BlogStatus>
        </div>
      </div>
    </div>
  );
}

export default PostedBlogCard;
