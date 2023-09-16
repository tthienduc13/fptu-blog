import React from "react";
import Image from "next/image";
import Link from "next/link";
import MoreIcon from "@icons/home/moreIcon.png";
import BlogCard from "@/components/BlogCard";
import SampleImage from "@image/sampleImage.png";
function MajorBlog() {
  const sampleDate = [
    {
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Language",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Business",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Language",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Business",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
  ];
  return (
    <>
      <div className="mb-[40px] p-[20px] md:p-[40px] w-full">
        <div className="w-full flex items-center justify-between mb-5">
          <h1 className="text-[#14375F] font-bold md:text-[30px] md:leading-[45px] text-2xl">
            Your Major&#39;s Blogs
          </h1>
          <Link
            href={"/blog/category-blog"}
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
        <div className="w-full flex md:flex-row sm:flex-col lg:gap-y-[30px] sm:gap-y-4 flex-wrap justify-between">
          {sampleDate.map((data, index) => (
            <BlogCard
              key={index}
              title={data.title}
              author={data.author}
              image={data.image}
              category={data.category}
              desc={data.desc}
              time={data.time}
            ></BlogCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default MajorBlog;
