import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@icons/logo/logo.svg";
import SearchIcon from "@icons/header/search.svg";
import ArrowDown from "@icons/header/arrowDown.svg";
import ProfileImg from "@icons/header/profileImage.svg";
import NotiIcon from "@icons/header/notiIcon.svg";
import BurgerMenu from "@icons/header/burger.svg";
import DropDown from "@/components/Dropdown/index";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { toggleIsOpenSideBar } from "@/redux/slices/app";
function Header() {
  const dispatch = useDispatch();
  const hanldeOpenMenu = () => {
    dispatch(toggleIsOpenSideBar());
  };
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);
  const handleNav = () => {
    setIsOpenNav(!isOpenNav);
  };
  const handleScroll = () => {
    setIsOpenNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" top-0 left-0 right-0 w-full fixed z-[1] bg-[#ffffff] backdrop-blur-sm border-b-2 border-b-[#E8EBED]">
      <div className=" w-full mx-auto h-[56px] lg:h-[64px] px-[20px] md:px-[40px]  flex justify-between items-center ">
        <Image
          src={BurgerMenu}
          alt="Burger Menu"
          width={28}
          height={20}
          className="cursor-pointer lg:hidden "
          onClick={hanldeOpenMenu}
        ></Image>
        <Link href="/">
          <Image
            priority={true}
            src={Logo}
            width={100}
            height={100}
            className="h-[32px] w-auto hidden lg:block "
            alt="Logo of author"
          ></Image>
        </Link>
        <div className="flex items-center h-[46px] gap-[16px] cursor-pointer">
          <div
            onClick={handleNav}
            className=" relative  items-center hidden lg:flex  hover:bg-[#F5F5F5] shadow-md  gap-[10px] px-[12px] py-[4px] lg:px-[20px] lg:py-[8px] border-[1px] border-[#E8EBED] rounded-[40px]"
          >
            {isOpenNav && <DropDown></DropDown>}
            <div className="text-[#14375F]   h-[19px] leading-[19px] text-base font-medium">
              Nguyen Le Thien Duc (K17DN)
            </div>
            <div className="flex items-center gap-[5px]">
              <Image
                width={100}
                height={100}
                src={ProfileImg}
                alt="Profile Image"
                className="w-[30px] h-[30px]"
              ></Image>
              {isOpenNav ? (
                <Image
                  width={100}
                  height={100}
                  className="w-[14px] rotate-180 h-[10px]"
                  src={ArrowDown}
                  alt="Arrow"
                ></Image>
              ) : (
                <Image
                  width={100}
                  height={100}
                  className="w-[14px]  h-[10px]"
                  src={ArrowDown}
                  alt="Arrow"
                ></Image>
              )}
            </div>
          </div>
          <Image
            src={NotiIcon}
            alt="Notification Icon"
            width={100}
            height={100}
            className="w-[30px] h-[30px]"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Header;
