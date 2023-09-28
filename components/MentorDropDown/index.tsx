import React from "react";
import Link from "next/link";
import ProfileImg from "@icons/header/profileImage.svg";
import VerifiedMentor from "@icons/header/verifiedMentor.svg";
import Image from "next/image";
interface DropDownProps {
  functionHandleLogout: () => void;
  fullName: string | undefined;
  userName: string | undefined;
}
function UserDropDown({
  userName,
  fullName,
  functionHandleLogout,
}: DropDownProps) {
  return (
    <div className="absolute right-[15px] bottom-[-404px]  w-[330px]  bg-white border-[1px] border-[#E8EBED] rounded-[12px] shadow-lg p-4">
      <div className="w-full pb-4 border-b-[1px] border-[#E8EBED] flex gap-[10px] items-center">
        <Image
          src={ProfileImg}
          alt="Profile Image"
          height={60}
          width={60}
          className="object-cover"
        ></Image>
        <div className="flex w-full flex-col gap-[4px]">
          <div className="flex ">
            <div className="w-full text-[18px] text-[#14375F] leading-[22px]">
              {fullName}
            </div>
            <Image
              src={VerifiedMentor}
              alt="Tick"
              height={24}
              width={24}
            ></Image>
          </div>
          <div className="w-full text-sm font-medium leading-[19px] text-[#707070]">
            @{userName}
          </div>
        </div>
      </div>
      <div className="py-4 border-b-[1px] gap-[10px] flex flex-col  border-[#E8EBED] text-[#707070]">
        <Link className="hover:text-[#14375F]" href={""}>
          View Profile
        </Link>
        <Link className="hover:text-[#14375F]" href={""}>
          View Pending Blogs
        </Link>
      </div>
      <div className="py-4 border-b-[1px] gap-[10px] flex flex-col  border-[#E8EBED] text-[#707070]">
        <Link className="hover:text-[#14375F]" href={""}>
          Write Blog
        </Link>
        <Link className="hover:text-[#14375F]" href={""}>
          My Blogs
        </Link>
      </div>
      <Link href={""}>
        <div className="w-full py-[10px] border-b-[1px] hover:text-[#14375F] border-[#E8EBED] text-[#707070]">
          Saved Blogs
        </div>
      </Link>
      <div className="pt-4  gap-[10px] flex flex-col   text-[#707070]">
        <Link className="hover:text-[#14375F]" href={""}>
          Settings
        </Link>
        <div onClick={functionHandleLogout} className="hover:text-[#14375F]">
          Log Out
        </div>
      </div>
    </div>
  );
}

export default UserDropDown;
