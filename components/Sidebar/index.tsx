"use client";
import React, { useState } from "react";
import AddIcon from "@icons/sidebar/addIcon.svg";
import Image from "next/image";
import HomeIcon from "@icons/sidebar/homeIcon.svg";
import FeaturedIcon from "@icons/sidebar/featuredIcon.svg";
import CategoryIcon from "@icons/sidebar/categoryIcon.svg";
import SavedIcon from "@icons/sidebar/savedIcon.svg";
import PenIcon from "@icons/sidebar/penIcon.svg";
import BlogIcon from "@icons/sidebar/blogIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toggleIsOpenSideBar } from "@/redux/slices/app";
function Sidebar() {
  const sideActivity = [
    {
      path: "/",
      icon: HomeIcon,
      alt: "Home",
      width: 20,
      height: 20,
      title: "Home",
    },
    {
      path: "/blog/featured-blog/list/1",
      icon: FeaturedIcon,
      alt: "Featured",
      width: 20,
      height: 18,
      title: "Featured",
    },
    {
      path: "/blog/category-blog/list/1",
      icon: CategoryIcon,
      alt: "Category",
      width: 20,
      height: 20,
      title: "Category",
    },
    {
      path: "/blog/posted-blog/list/1",
      icon: BlogIcon,
      alt: "Blog",
      width: 20,
      height: 20,
      title: "Your Blog",
    },
    {
      path: "/",
      icon: SavedIcon,
      alt: "Saved",
      width: 20,
      height: 14,
      title: "Saved",
    },
  ];
  const dispatch = useDispatch();
  const isOpenSidebar = useSelector(
    (state: RootState) => state.app.isOpenSideBar
  );
  const [isClickAdd, setIsClickAdd] = useState<boolean>(false);
  const [isChosen, setIsChosen] = useState<number>(0);
  const pathname = usePathname();
  const setClickAdd = () => {
    setIsClickAdd(!isClickAdd);
  };
  const handleChoose = (index: number) => {
    setIsChosen(index);
  };
  const handleChosen = (index: number) => {
    setIsChosen(index);
    dispatch(toggleIsOpenSideBar());
  };

  return (
    <>
      <aside className="fixed top-[56px] md:top-[64px] bg-white border-t-[1px] hidden lg:flex flex-col gap-4 px-[13px] py-[20px] lg:py-[40px] items-center left-0 z-40  h-screen border-r-[1px] select-none border-[#E8EBED] ">
        <div
          onClick={setClickAdd}
          className="h-[44px] relative w-[44px] rounded-full flex items-center justify-center cursor-pointer bg-[#E0312E]"
        >
          {isClickAdd && (
            <div className="absolute px-4  max-w-[200px] flex flex-col items-start bg-white rounded-lg drop-shadow-xl  bottom-[-45px] right-[-120px] shadow-lg py-[8px] ">
              <Link
                scroll={false}
                href={"/blog/create"}
                className="flex gap-[10px] w-full"
                onClick={() => dispatch(toggleIsOpenSideBar())}
              >
                <Image
                  src={PenIcon}
                  alt="Write Icon"
                  width={20}
                  height={20}
                ></Image>
                <div className="text-[#707070] text-lg leading-[22px] hover:text-[#14375F]">
                  Write Blog
                </div>
              </Link>
            </div>
          )}
          <Image
            src={AddIcon}
            alt="Add Blog"
            width={18}
            height={18}
            className={
              isClickAdd
                ? "cursor-pointer hover:scale-125 duration-300 rotate-45"
                : "cursor-pointer hover:scale-125 duration-300"
            }
          ></Image>
        </div>
        {sideActivity.map((sideActivity, index) => (
          <Link href={sideActivity.path} key={index}>
            <div
              onClick={() => handleChoose(index)}
              className={`w-[72px] h-[72px] flex flex-col gap-[6px] rounded-[12px] justify-center items-center ${
                isChosen === index && pathname === sideActivity.path
                  ? "bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
            >
              <Image
                src={sideActivity.icon}
                alt={sideActivity.alt}
                height={sideActivity.height}
                width={sideActivity.width}
              ></Image>
              <div className="text-xs font-medium leading-[15px] text-[#14375F]">
                {sideActivity.title}
              </div>
            </div>
          </Link>
        ))}
      </aside>
      {isOpenSidebar && (
        <aside className="fixed top-[56px] md:top-[64px]  bg-white border-t-2 flex flex-col py-[20px] lg:py-[40px] gap-4 px-[13px]  items-center left-0 z-40  h-screen border-r-2 select-none border-[#E8EBED] ">
          <div
            onClick={setClickAdd}
            className="h-[44px] relative w-[44px] rounded-full flex items-center justify-center cursor-pointer bg-[#E0312E]"
          >
            {isClickAdd && (
              <div className="absolute px-4  max-w-[200px] flex flex-col items-start bg-white rounded-lg drop-shadow-xl  bottom-[-45px] right-[-120px] shadow-lg py-[8px] ">
                <Link href={"/blog/create"} className="flex gap-[10px] w-full">
                  <Image
                    src={PenIcon}
                    alt="Write Icon"
                    width={20}
                    height={20}
                  ></Image>
                  <div className="text-[#707070] text-lg leading-[22px] hover:text-[#14375F]">
                    Write Blog
                  </div>
                </Link>
              </div>
            )}
            <Image
              src={AddIcon}
              alt="Add Blog"
              width={18}
              height={18}
              className={
                isClickAdd
                  ? "cursor-pointer hover:scale-125 duration-300 rotate-45"
                  : "cursor-pointer hover:scale-125 duration-300"
              }
            ></Image>
          </div>
          {sideActivity.map((sideActivity, index) => (
            <Link href={sideActivity.path} key={index}>
              <div
                onClick={() => handleChosen(index)}
                className={`w-[72px] h-[72px] flex flex-col gap-[6px] rounded-[12px] justify-center items-center ${
                  isChosen === index && pathname === sideActivity.path
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
              >
                <Image
                  src={sideActivity.icon}
                  alt={sideActivity.alt}
                  height={sideActivity.height}
                  width={sideActivity.width}
                ></Image>
                <div className="text-xs font-medium leading-[15px] text-[#14375F]">
                  {sideActivity.title}
                </div>
              </div>
            </Link>
          ))}
        </aside>
      )}
    </>
  );
}

export default Sidebar;
