"use client";
import React from "react";
import BlogCard from "@/components/BlogCard";
import SampleImage from "@image/sampleImage.png";
import { useState } from "react";
import Pagination from "@component/Pagination";
interface pageProps {
  params: { listID: string };
}
function FeaturedBlog({ params }: pageProps) {
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
              <h1 className="text-[#14375F] font-bold md:text-[30px] md:leading-[45px] text-2xl">
                Featured Blogs
              </h1>
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
                route={"/featured-blog/list/"}
              ></Pagination>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default FeaturedBlog;