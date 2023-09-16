import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

import { StaticImageData } from "next/image";
interface Iprops {
  image: StaticImageData;
  title: string;
  author: string;
  category: string;
  desc: string;
  time: string;
}
function BlogCard({ image, title, author, category, desc, time }: Iprops) {
  return (
    <div className="max-w-[calc((100%-60px)/3)] rounded-lg overflow-hidden w-full drop-shadow-lg shadow-lg">
      <Image src={image} alt="image" className="w-full object-cover"></Image>
      <div className="w-full flex gap-2 flex-col p-4">
        <div className="w-full items-stretch text-[20px] leading-[25px] font-bold ">
          {title}
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-[12px] cursor-pointer leading-[15px] text-[#0066B2] font-medium">
            {author}
          </p>
          <p className="text-[12px] cursor-pointer leading-[15px] text-[#0066B2] font-medium">
            {category}
          </p>
        </div>
        <div className="self-stretch cur text-[14px] font-normal text-gray-500">
          {desc}
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="text-gray-500 text-[12px] cursor-default font-medium">
            {time}
          </div>
          <Button
            textContent="Read more"
            icon="arrowRight"
            iconPosition="right"
            backgroundColor="bg-[#0066B2]"
            href="/"
            tailwind="hover:opacity-80"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;