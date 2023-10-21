import Image, { StaticImageData } from "next/image";
import Button from "@/components/Button";
import React from "react";
interface BLogProps {
  image: StaticImageData;
  title: string;
  author: string;
  category: string;
  desc: string;
  time: string;
}

interface IProps {
  value: BLogProps;
}
function HorizonCard({ value }: IProps) {
  return (
    <>
      <div className="w-full h-full  border-[2px] flex rounded-[12px] overflow-hidden">
        <Image
          src={value.image}
          alt="Image of blog"
          width={240}
          height={240}
          className="object-fill"
        ></Image>
        <div className="w-full h-full p-4 gap-2  flex flex-col items-center">
          <div className="w-full items-stretch text-[20px] leading-[25px] font-bold ">
            {value.title}
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-[12px] cursor-pointer leading-[15px] text-[#0066B2] font-medium">
              {value.author}
            </p>
            <p className="text-[12px] cursor-pointer leading-[15px] text-[#0066B2] font-medium">
              {value.category}
            </p>
          </div>
          <div className="self-stretch cur text-[14px] font-normal text-gray-500">
            {value.desc}
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="text-gray-500 text-[12px] cursor-default font-medium">
              {value.time}
            </div>
            <Button
              textContent="Read more"
              icon="arrowRight"
              iconPosition="right"
              backgroundColor="bg-[#0066B2]"
              href="/blog/detail/"
              tailwind="hover:opacity-80"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizonCard;
