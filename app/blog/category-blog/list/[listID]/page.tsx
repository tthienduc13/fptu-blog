"use client";
import Image from "next/image";
import React from "react";
import BlogCard from "@/components/BlogCard";
import SampleImage from "@image/sampleImage.png";
import { useState } from "react";
import Pagination from "@component/Pagination";
import SearchIcon from "@icons/page/blog/searchIcon.svg";
interface pageProps {
  params: { listID: string };
}
function CategoryBlog({ params }: pageProps) {
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
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 3,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 4,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 5,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 6,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 7,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 8,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 9,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 10,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 11,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 12,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 13,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 14,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 15,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 6,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 17,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 18,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 19,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      id: 20,
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
  ];
  const increaseIndex = 8;
  const [blogs, setBlogs] = useState(sampleData.slice(0, increaseIndex + 1));
  const [countListPage, setCountListPage] = useState(
    Math.ceil(sampleData.length / increaseIndex)
  );
  const pages: { param: string; startIndex: number; endIndex: number }[] = [];
  return (
    <>
      <main className=" absolute sm:w-full h-full lg:w-[calc(100%-100px)] flex flex-col justify-center right-0 top-[64px] bottom-0 ">
        <div className="w-full h-full ">
          <div className="mb-[40px] p-[20px] md:p-[40px] w-full">
            <div className="w-full  mb-5">
              <h1 className="text-[#14375F] font-bold md:text-[30px] md:leading-[45px] text-3xl">
                Category Blogs
              </h1>
            </div>
            <div className="flex w-fit h-[38px] rounded-[10px] overflow-hidden mb-5">
              <select className="w-[84px] leading-4 px-[20px] rounded-tl-[10px] rounded-bl-[10px] border-2 outline-none border-slate-200 bg-gray-100 select-none ">
                <option value="All" className="">
                  All
                </option>
                <option value="All" className="">
                  All
                </option>
                <option value="All" className="">
                  All
                </option>
              </select>
              <input
                type="search"
                className="w-[392px] border-y-2 border-r px-2   border-l-none border-slate-200 select-none outline-none"
              />
              <div className="w-[42px] h-[38px] bg-[#0066B2] flex items-cent  justify-center cursor-pointer">
                <Image
                  src={SearchIcon}
                  height={30}
                  width={30}
                  alt="searchIcon"
                />
              </div>
            </div>
            <div className="w-full flex md:flex-row sm:flex-col lg:gap-y-[30px] sm:gap-y-4 flex-wrap lg:gap-x-[30px] sm:gap-x-4 ">
              {blogs.map((data, index) => (
                <BlogCard key={index} value={data}></BlogCard>
              ))}
              <Pagination
                paramID={params.listID}
                countNumberOfPage={countListPage}
                pages={pages}
                increaseIndex={increaseIndex}
                sliceSetData={setBlogs}
                data={sampleData}
                route={"/blog/featured-blog/list/"}
              ></Pagination>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CategoryBlog;
