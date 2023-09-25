"use client";
import React from "react";
import SampleImage from "@image/sampleImage.png";
import { useState } from "react";
import InstagramIcon from "@icons/page/blog/detail/instaIcon.svg";
import FacebookIcon from "@icons/page/blog/detail/facebookIcon.svg";
import TwitterIcon from "@icons/page/blog/detail/twitterIcon.svg";
import BackIcon from "@icons/page/blog/backIcon.svg";
import { useRouter } from "next/navigation";
import TagIcon from "@icons/page/blog/tagIcon.svg";
import Image from "next/image";
function DetailBLogList() {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <main className="absolute w-full flex flex-col gap-[20px] right-0 top-[56px] lg:top-[64px] bottom-0 h-fit p-[20px] lg:p-[40px]">
        <div className="w-full mb-[40px] flex flex-col gap-3">
          <div className="w-full   flex items-center justify-between">
            <h1 className=" w-4/5 text-[40px] leading-[50px] font-bold select-none">
              Noteworthy technology acquisitions 2021
            </h1>
            <div
              onClick={() => router.back()}
              className=" w-1/5 flex justify-end items-center gap-[6px] cursor-pointer hover:gap-[10px] duration-300"
            >
              <Image
                src={BackIcon}
                className="md:h-[20px] md:w-[20px] w-[16px] h-[16px]"
                height={20}
                width={20}
                alt="Back"
              ></Image>
              <div className="text-[#707070] text-base md:text-xl md:leading-[24px] font-medium ">
                Go Back
              </div>
            </div>
          </div>
          <div className="w-fit flex items-center border-r-[2px] border-gray-500">
            <div className="pr-[10px] border-r-[2px] border-[#0066B2] text-[#0066B2] text-xl">
              Nguyen Le Thien Duc
            </div>
            <div className="px-[10px] border-r-[2px] border-[#E24943] text-[#E24943] text-xl">
              Category
            </div>
            <div className="px-[10px] text-gray-500 text-lg">a min ago</div>
          </div>
          <div className="w-full gap-[10px] flex items-center">
            <Image src={TagIcon} alt="tag icon" height={24} width={24}></Image>
            <div className="rounded-[6px] py-[2px] px-[10px] bg-green-100 text-green-500 text-sm">
              ReactJS
            </div>
            <div className="rounded-[6px] py-[2px] px-[10px] bg-green-100 text-green-500 text-sm">
              ReactJS
            </div>
            <div className="rounded-[6px] py-[2px] px-[10px] bg-green-100 text-green-500 text-sm">
              ReactJS
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          {/* Thumbnail */}
          <div className="w-full flex items-center justify-center mb-5">
            <Image
              className="object-contain"
              src={SampleImage}
              width={1200}
              height={600}
              alt="image of blog"
            ></Image>
          </div>
          {/* Content */}
          <div className="w-full py-5 text-justify border-b-2 border-[#0066B2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas
            ultrices. Vestibulum et neque id ex semper varius a sit amet metus.
            Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus
            egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas
            rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum
            placerat ligula posuere, ut rhoncus velit eleifend.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum
            non enim sit amet, iaculis aliquet nunc. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
            Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
            congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas.
            Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus
            enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo
            leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula
            posuere, ut rhoncus velit eleifend.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec ligula nibh, interdum non enim
            sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Aliquam
            sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex
            semper varius a sit amet metus. Vivamus congue dolor eget aliquam
            hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio
            efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
            Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti.
            Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit
            eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas
            ultrices. Vestibulum et neque id ex semper varius a sit amet metus.
            Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus
            egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas
            rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum
            placerat ligula posuere, ut rhoncus velit eleifend.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum
            non enim sit amet, iaculis aliquet nunc. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
            Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
            congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas.
            Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus
            enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo
            leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula
            posuere, ut rhoncus velit eleifend.
          </div>
        </div>
        <div className=" flex w-full justify-between items-center">
          <div className="flex gap-[10px] items-center">
            <div className="text-[#14375F] text-[20px] leading-[30px] font-semibold">
              Share with
            </div>
            <div className="gap-2 flex items-center">
              <Image
                className="cursor-pointer hover:opacity-80"
                src={FacebookIcon}
                alt="facebook"
                height={30}
                width={30}
              ></Image>
              <Image
                className="cursor-pointer hover:opacity-80"
                src={InstagramIcon}
                alt="instagram"
                height={30}
                width={30}
              ></Image>
              <Image
                className="cursor-pointer hover:opacity-80"
                src={TwitterIcon}
                alt="twitter"
                height={30}
                width={30}
              ></Image>
            </div>
          </div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M21.25 24.025H6.25V8.75H15V6.25H6.25C4.875 6.25 3.75 7.375 3.75 8.75V23.75C3.75 25.125 4.875 26.25 6.25 26.25H21.25C22.625 26.25 23.75 25.125 23.75 23.75V15H21.25V24.025Z"
                fill="black"
              />
              <path
                d="M23.75 2.5H21.25V6.25H17.5C17.5125 6.2625 17.5 8.75 17.5 8.75H21.25V12.4875C21.2625 12.5 23.75 12.4875 23.75 12.4875V8.75H27.5V6.25H23.75V2.5ZM8.75 11.25H18.75V13.75H8.75V11.25ZM8.75 15V17.5H18.75V15H15H8.75ZM8.75 18.75H18.75V21.25H8.75V18.75Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M4.07344 4.92191C3.97258 5.00933 3.89155 5.11728 3.83578 5.23854C3.78 5.3598 3.75075 5.49157 3.75 5.62504V25.3125C3.75 25.5612 3.84877 25.7996 4.02459 25.9755C4.2004 26.1513 4.43886 26.25 4.6875 26.25C4.93614 26.25 5.1746 26.1513 5.35041 25.9755C5.52623 25.7996 5.625 25.5612 5.625 25.3125V20.1293C8.76445 17.6496 11.4691 18.9868 14.584 20.5289C16.5059 21.4793 18.5754 22.5036 20.7949 22.5036C22.4273 22.5036 24.1395 21.9469 25.9301 20.3942C26.0309 20.3068 26.112 20.1988 26.1677 20.0776C26.2235 19.9563 26.2528 19.8245 26.2535 19.6911V5.62504C26.2531 5.44509 26.2009 5.26907 26.1031 5.11799C26.0054 4.96691 25.8662 4.84715 25.7023 4.77301C25.5383 4.69887 25.3565 4.67349 25.1785 4.6999C25.0005 4.7263 24.8338 4.80337 24.6984 4.92191C21.4172 7.76137 18.6375 6.38558 15.416 4.79066C12.0785 3.13598 8.29453 1.26449 4.07344 4.92191ZM24.375 19.2481C21.2355 21.7278 18.5309 20.3895 15.416 18.8485C12.4863 17.4012 9.22734 15.7864 5.625 17.8641V6.06918C8.76445 3.58949 11.4691 4.9266 14.584 6.46762C17.5137 7.91488 20.7738 9.52973 24.375 7.45199V19.2481Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="w-full gap-[20px] flex flex-col">
          <div className="text-3xl font-bold text-[#14375F] ">
            Related Blogs
          </div>
          <div className="w-full "></div>
        </div>
      </main>
    </>
  );
}

export default DetailBLogList;
