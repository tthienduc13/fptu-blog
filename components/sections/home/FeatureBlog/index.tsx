import React from "react";
import Image from "next/image";
import Link from "next/link";
import MoreIcon from "@icons/home/moreIcon.png";
import BlogCard from "@/components/BlogCard";
import SampleImage from "@image/sampleImage.png";
function FeaturedBlog() {
  const sampleData = [
    {
      id: 1,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 2,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Language",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 3,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Business",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
  ];
  return (
    <div className="mb-[40px] p-[20px] md:p-[40px] w-full">
      <div className="w-full flex items-center justify-between mb-5">
        <h1 className="text-[#14375F] font-bold md:text-[30px] md:leading-[45px] text-2xl">
          Featured Blogs
        </h1>
        <Link
          href={"/featured-blog/list/1"}
          className="flex items-center gap-[6px] cursor-pointer hover:gap-[10px] duration-300"
        >
          <Image
            src={MoreIcon}
            className="md:h-[20px] md:w-[20px] w-[16px] h-[16px]"
            height={20}
            width={20}
            alt="viewmore"
          ></Image>
          <div className="text-[#0066B2] text-base md:text-xl md:leading-[24px] font-medium ">
            View more
          </div>
        </Link>
      </div>
      <div className="w-full flex md:flex-row sm:flex-col md:gap-0 sm:gap-[16px] flex-wrap justify-between">
        {sampleData.map((data, index) => (
          <BlogCard key={index} value={data}></BlogCard>
        ))}
      </div>
    </div>
  );
}

export default FeaturedBlog;
