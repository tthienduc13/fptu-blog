"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import Logo from "@icons/logo/logo.svg";
import DefaultAvatar from "@icons/header/defaultAvatar.svg";
import ArrowDown from "@icons/header/arrowDown.svg";
import NotiIcon from "@icons/header/notiIcon.svg";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import DropDown from "@/components/Dropdown/index";
import Link from "next/link";
import { Category, SearchResult, UserInfo } from "@/utils/types";
import { toogleIsCollapsed } from "@/redux/slices/app";
import { getCookie } from "cookies-next";
import { getMemberInfo } from "@/apis/profile";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { Badge, Space, Button } from "antd";
import Search from "../Search";
import { getAllCategory } from "@/apis/category";
import { searchBlog } from "@/apis/blog";
import SearchList from "../SearchList";
function Header(): JSX.Element {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [userData, setUserData] = useState<UserInfo>();
  const [categoryData, setCategoryData] = useState<Category[]>([]);
  const [searchResult, setSearchResult] = useState<SearchResult[]>();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const isCollapsed = useSelector((state: RootState) => state.app.isCollapsed);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleOpenMenu = (): void => {
    dispatch(toogleIsCollapsed());
  };

  const getUserInfoWithCategoryId = (
    userData: UserInfo,
    categories: Category[]
  ) => {
    for (const category of categories) {
      if (category.title === userData.department) {
        return category.category_id;
      }
    }
    return null;
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

  const handleGetAllCategories = async () => {
    const accessToken = getCookie("accessToken");
    try {
      if (accessToken) {
        const response = await getAllCategory(accessToken);
        setCategoryData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchBlog = async () => {
    const accessToken = getCookie("accessToken");
    try {
      if (accessToken && userData) {
        const categoryID = getUserInfoWithCategoryId(userData, categoryData);
        const blogSearch = {
          search: searchQuery ?? "",
          category_id: categoryID!,
        };
        const response = await searchBlog(blogSearch);
        setSearchResult(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearchBlog();
  }, [searchQuery]);

  useEffect(() => {
    handleGetUserProfile();
    handleGetAllCategories();
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
  const displayName = userData?.fullName ?? userName;

  return (
    <div className="top-0 left-0 right-0 w-full fixed z-[1] bg-[#ffffff] backdrop-blur-sm border-b-[1px] border-b-[#E8EBED]">
      <div className="w-full mx-auto h-[56px] lg:h-[64px] px-[20px]  flex justify-between items-center">
        <div className="flex flex-row gap-5 items-center">
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            type="default"
            onClick={handleOpenMenu}
          >
            {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Link href="/">
            <Image
              priority={true}
              src={Logo}
              width={100}
              height={100}
              className="h-[28px] w-auto hidden lg:block"
              alt="Logo of author"
            />
          </Link>
        </div>
        <div className="w-[40%]">
          <div className="w-full relative">
            <Search setSearchQuery={setSearchQuery}></Search>
            <div className="w-full top-[3rem] absolute">
              {searchQuery && searchResult && searchResult.length > 0 ? (
                <SearchList result={searchResult!}></SearchList>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center h-[46px] gap-[16px] cursor-pointer">
          <div
            ref={dropdownRef}
            onClick={handleDropdown}
            className="relative items-center hidden lg:flex hover:bg-[#F5F5F5] shadow-md gap-[10px] px-[12px] py-[4px] lg:px-[20px] lg:py-[8px] border-[1px] border-[#E8EBED] rounded-[40px]"
          >
            {isDropdownOpen && (
              <DropDown
                image={userData?.image!}
                userName={userName}
                fullName={displayName}
              />
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
                {displayName}
              </div>
            )}
            <div className="flex items-center gap-[5px]">
              {isLoading ? (
                <div className="rounded-[50%] overflow-hidden">
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
          <Space size="small">
            <Badge size="small" count={5}>
              <Image
                src={NotiIcon}
                alt="Notification Icon"
                style={{ width: "28px", height: "28px" }}
                className=" object-cover"
              />
            </Badge>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Header;
