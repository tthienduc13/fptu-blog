"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Logo from "@icons/logo/logo.svg";
import DefaultAvatar from "@icons/header/defaultAvatar.svg";
import SearchIcon from "@icons/header/search.svg";
import ArrowDown from "@icons/header/arrowDown.svg";
import ProfileImg from "@icons/header/profileImage.svg";
import NotiIcon from "@icons/header/notiIcon.svg";
import BurgerMenu from "@icons/header/burger.svg";
import DropDown from "@/components/Dropdown/index";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { userInfo } from "@/utils/types";
import { toggleIsOpenSideBar } from "@/redux/slices/app";
import { getCookie } from "cookies-next";
import { getMemberInfo } from "@/apis/profile";
import axios from "axios";
import { Skeleton } from "@mui/material";
function Header(): JSX.Element {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);
  const [userData, setUserData] = useState<userInfo>();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleOpenMenu = (): void => {
    dispatch(toggleIsOpenSideBar());
  };

  const handleDropdown = (): void => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleOutsideClick = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleScroll = (): void => {
    setIsOpenNav(false);
    setIsDropdownOpen(false);
  };
  const handleGetUserProfile = async () => {
    try {
      const access_token = getCookie("accessToken");
      if (access_token) {
        const userId = getCookie("user_id");
        if (userId) {
          const response = await getMemberInfo(userId, access_token);
          const data = response.data;
          setUserData(data);
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleGetUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const userName = userData?.email?.split("@")[0];
  const fullName =
    userData?.last_name && userData?.first_name
      ? `${userData.last_name} ${userData.first_name}`
      : userName;

  return (
    <div className="top-0 left-0 right-0 w-full fixed z-[1] bg-[#ffffff] backdrop-blur-sm border-b-2 border-b-[#E8EBED]">
      <div className="w-full mx-auto h-[56px] lg:h-[64px] px-[20px] md:px-[40px] flex justify-between items-center">
        <Image
          src={BurgerMenu}
          alt="Burger Menu"
          width={28}
          height={20}
          className="cursor-pointer lg:hidden"
          onClick={handleOpenMenu}
        />
        <Link href="/">
          <Image
            priority={true}
            src={Logo}
            width={100}
            height={100}
            className="h-[32px] w-auto hidden lg:block"
            alt="Logo of author"
          />
        </Link>
        <div className="flex items-center h-[46px] gap-[16px] cursor-pointer">
          <div
            ref={dropdownRef}
            onClick={handleDropdown}
            className="relative items-center hidden lg:flex hover:bg-[#F5F5F5] shadow-md gap-[10px] px-[12px] py-[4px] lg:px-[20px] lg:py-[8px] border-[1px] border-[#E8EBED] rounded-[40px]"
          >
            {isDropdownOpen && (
              <DropDown userName={userName} fullName={fullName} />
            )}
            {isLoading ? (
              <div className="w-[150px]">
                <Skeleton
                  sx={{ bgcolor: "grey.100" }}
                  variant="rectangular"
                  height={20}
                ></Skeleton>
              </div>
            ) : (
              <div className="text-[#14375F] h-[19px] leading-[19px] text-base font-medium">
                {fullName}
              </div>
            )}
            <div className="flex items-center gap-[5px]">
              {isLoading ? (
                <div className="rounded-[50%] overflow-hidden">
                  {" "}
                  <Skeleton
                    height={30}
                    width={30}
                    variant="rounded"
                    sx={{ bgcolor: "grey.100" }}
                  ></Skeleton>
                </div>
              ) : (
                <Image
                  width={100}
                  height={100}
                  src={
                    userData?.image == null ? DefaultAvatar : userData?.image
                  }
                  alt="Profile Image"
                  className="w-[30px] rounded-[50%] h-[30px] object-cover"
                />
              )}
              <Image
                width={100}
                height={100}
                className={`w-[14px] h-[10px] ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                src={ArrowDown}
                alt="Arrow"
              />
            </div>
          </div>
          <Image
            src={NotiIcon}
            alt="Notification Icon"
            width={100}
            height={100}
            className="w-[30px] h-[30px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
