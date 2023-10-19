import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import SampleImage from "@image/blogSample.png";
import BackIcon from "@icons/page/blog/backIcon.svg";
import TagIcon from "@icons/page/blog/tagIcon.svg";
import SocialButton from "@/components/SocialButton";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "next-share";
import { socicalButton } from "@/utils/elements";
import { timeAgo } from "@/utils/dayFormat";
import { getCookie } from "cookies-next";
import { getBlogByID } from "@/apis/blog";
import { BlogDetail } from "@/utils/types";

interface ContentDetailProps {
  setBlogData: React.Dispatch<React.SetStateAction<BlogDetail | undefined>>;
  blogData: BlogDetail | undefined;
}
function Content({ setBlogData, blogData }: ContentDetailProps) {
  const param = useParams();
  const router = useRouter();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const hanldeGetPost = async () => {
    try {
      const access_token = getCookie("accessToken");
      const blog_id = param.blogID as string;
      if (access_token && blog_id) {
        const blogResponse = await getBlogByID(blog_id, access_token);
        setBlogData(blogResponse.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    hanldeGetPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="w-full mb-[40px] flex flex-col gap-2">
        <div className="w-full   flex items-center justify-between">
          <h1 className=" w-4/5 text-[40px] leading-[50px] font-bold select-none">
            {blogData?.blog_title}
          </h1>
          <div
            onClick={() => router.back()}
            className=" w-1/5 flex justify-end items-center gap-[6px] cursor-pointer hover:gap-[10px] duration-300"
          >
            <Image
              src={BackIcon}
              className="md:h-[20px] md:w-[20px] w-[16px] h-[16px]"
              height={18}
              width={18}
              style={{
                width: "auto",
                height: "auto",
              }}
              alt="Back"
            ></Image>
            <div className="text-gray-500 text-base md:text-lg font-medium ">
              Go back
            </div>
          </div>
        </div>
        <div className="w-fit flex items-center border-r-[2px] border-gray-500">
          <div className="pr-[10px] border-r-[2px] border-[#0066B2] text-[#0066B2] text-lg">
            {blogData?.user_name}
          </div>
          <div className="px-[10px] border-r-[2px] border-[#E24943] text-[#E24943] text-lg">
            {blogData?.category_description}
          </div>
          <div className="px-[10px] text-gray-500 text-base">
            {blogData?.published_at
              ? timeAgo(blogData?.published_at)
              : "Not published yet"}
          </div>
        </div>
        <div className="w-full gap-[10px] flex items-center">
          <Image src={TagIcon} alt="tag icon" height={24} width={24}></Image>
          {blogData?.tag_titles.map((tag, index) => (
            <div
              key={index}
              className="rounded-[6px] py-[2px] px-[10px] bg-green-100 text-green-500 text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col ">
        {/* Thumbnail */}
        <div className="w-full flex items-center justify-center mb-5">
          <Image
            className="object-contain max-w-[1200px] max-h-[500px]"
            src={blogData?.visual ? blogData.visual : SampleImage}
            width={1200}
            height={600}
            alt="image of blog"
          ></Image>
        </div>
        {/* Content */}
        <div
          className="w-full py-5 text-justify border-b-2 border-[#0066B2]"
          dangerouslySetInnerHTML={{ __html: blogData?.content as string }}
        ></div>
      </div>
      <div className=" flex w-full justify-between items-center">
        <div className="flex gap-[8px]">
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            onClick={handleLike}
          >
            <path
              d="M27.041 8.30861C26.6483 7.39935 26.0821 6.57538 25.374 5.88283C24.6654 5.18822 23.83 4.63622 22.9131 4.25686C21.9623 3.86191 20.9426 3.65976 19.9131 3.66213C18.4688 3.66213 17.0596 4.05764 15.835 4.80471C15.542 4.98342 15.2637 5.17971 15 5.39358C14.7363 5.17971 14.458 4.98342 14.165 4.80471C12.9404 4.05764 11.5312 3.66213 10.0869 3.66213C9.04687 3.66213 8.03906 3.86135 7.08691 4.25686C6.16699 4.63772 5.33789 5.18557 4.62598 5.88283C3.91698 6.5746 3.35062 7.39876 2.95898 8.30861C2.55176 9.2549 2.34375 10.2598 2.34375 11.294C2.34375 12.2696 2.54297 13.2862 2.93848 14.3203C3.26953 15.1846 3.74414 16.0811 4.35059 16.9863C5.31152 18.419 6.63281 19.9131 8.27344 21.4278C10.9922 23.9385 13.6846 25.6729 13.7988 25.7432L14.4932 26.1885C14.8008 26.3848 15.1963 26.3848 15.5039 26.1885L16.1982 25.7432C16.3125 25.6699 19.002 23.9385 21.7236 21.4278C23.3643 19.9131 24.6855 18.419 25.6465 16.9863C26.2529 16.0811 26.7305 15.1846 27.0586 14.3203C27.4541 13.2862 27.6533 12.2696 27.6533 11.294C27.6563 10.2598 27.4482 9.2549 27.041 8.30861ZM15 23.8711C15 23.8711 4.57031 17.1885 4.57031 11.294C4.57031 8.30861 7.04004 5.88869 10.0869 5.88869C12.2285 5.88869 14.0859 7.084 15 8.8301C15.9141 7.084 17.7715 5.88869 19.9131 5.88869C22.96 5.88869 25.4297 8.30861 25.4297 11.294C25.4297 17.1885 15 23.8711 15 23.8711Z"
              fill={isLiked ? "#FF0000" : "black"}
            />
            <path
              d="M19.9131 5.88867C17.7715 5.88867 15.9141 7.08398 15 8.83008C14.0859 7.08398 12.2285 5.88867 10.0869 5.88867C7.04004 5.88867 4.57031 8.30859 4.57031 11.2939C4.57031 17.1885 15 23.8711 15 23.8711C15 23.8711 25.4297 17.1885 25.4297 11.2939C25.4297 8.30859 22.96 5.88867 19.9131 5.88867Z"
              fill={isLiked ? "#FF0000" : "white"}
            />
          </svg>
        </div>
        <div className=" w-full justify-end flex gap-4 items-center">
          <div className=" w-full justify-end flex gap-4 items-center">
            {socicalButton.map((button, index) => (
              <div key={button.id}>
                {button.icon === "facebook" && (
                  <FacebookShareButton
                    url={`https://your-blog-url.com`}
                    hashtag="#FU_BLOG_Community"
                  >
                    <SocialButton
                      icon={button.icon}
                      title={button.title}
                      backgroundColor={button.backgroundColor}
                    />
                  </FacebookShareButton>
                )}
                {button.icon === "twitter" && (
                  <TwitterShareButton
                    url={`https://your-blog-url.com`}
                    hashtags={["FU_BLOG_Community"]}
                  >
                    <SocialButton
                      icon={button.icon}
                      title={button.title}
                      backgroundColor={button.backgroundColor}
                    />
                  </TwitterShareButton>
                )}
                {button.icon === "linkedin" && (
                  <LinkedinShareButton
                    url={`https://your-blog-url.com`}
                    title="Your Blog Title"
                  >
                    <SocialButton
                      icon={button.icon}
                      title={button.title}
                      backgroundColor={button.backgroundColor}
                    />
                  </LinkedinShareButton>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;