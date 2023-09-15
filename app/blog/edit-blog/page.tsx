"use client";
import React from "react";
import BackIcon from "@icons/page/blog/backIcon.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogTag from "@/components/BlogTag";
import CategoryTag from "@/components/CategoryTag";
import BrowseMedia from "@/components/BrowseMedia";
import BlogInputContent from "@/components/BlogInputContent";
function EditBlog() {
  const [importedImage, setImportedImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string>("");
  const [htmlString, setHtmlStringg] = useState<string>("");
  const router = useRouter();
  return (
    <>
      <main className=" absolute w-full flex flex-col gap-[20px] right-0 top-[64px] bottom-0 h-fit p-[40px]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-[30px] leading-[45px]  font-bold select-none">
            Create Blog
          </h1>
          <div
            onClick={() => router.back()}
            className="flex items-center gap-[6px] cursor-pointer hover:gap-[10px] duration-300"
          >
            <Image src={BackIcon} height={20} width={20} alt="Back"></Image>
            <div className="text-[#707070] text-xl leading-[24px] font-medium ">
              Go Back
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-[calc(50%-20px)] flex flex-col gap-2">
            <h3 className="text-base text-[#14375F] font-medium">
              Blog&#39;s Title:
            </h3>
            <input
              type="text"
              placeholder="Write title here"
              className="border-2 px-3 py-3 outline-[#0066B2] border-gray-300 rounded-[12px] w-full"
            />
          </div>
          <div className="w-[calc(50%-20px)] flex flex-col gap-2">
            <CategoryTag></CategoryTag>
          </div>
        </div>
        <div>
          <BrowseMedia
            formTitle="Your image or video"
            fileStorage={importedImage}
            setFileStorage={setImportedImage}
            setFileURL={setImageURL}
            page="create_blog"
          ></BrowseMedia>
        </div>
        <div>
          <BlogTag></BlogTag>
        </div>
        <div>
          <BlogInputContent
            formTitle="Your content"
            htmlString={htmlString}
            setHtmlString={setHtmlStringg}
            pageName="create_notification"
          ></BlogInputContent>
        </div>
      </main>
    </>
  );
}

export default EditBlog;
