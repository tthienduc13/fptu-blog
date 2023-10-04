"use client";

import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getCookie } from "cookies-next";
import axios from "axios";
import { getAllMember } from "@/apis/profile";
import DeleteIcon from "@icons/page/admin/deleteIcon.svg";
import EditIcon from "@icons/page/admin/editIcon.svg";
import Image from "next/image";
interface DataType {
  key: React.Key;
  fullname: string;
  role: string;
  department: string;
  email: string;
  major: string;
  status: string;
  description: string;
}

type Item = {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role_id: number;
  department: string;
  major: string;
  isVerified: boolean;
  bio: string;
};

const columns: ColumnsType<DataType> = [
  Table.EXPAND_COLUMN,
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (email) => <div style={{ color: "#1C64F2" }}>{email}</div>,
  },
  {
    title: "Deparment",
    dataIndex: "department",
    key: "department",
    render: (text) => <div style={{ textAlign: "center" }}>{text}</div>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <div style={{ textAlign: "center" }}>
        <span
          className="font-semibold text-sm rounded-lg uppercase py-[2px] px-[10px]"
          style={{
            color: status === "Active" ? "#03543F" : "#723B13",
            backgroundColor: status === "Active" ? "#DEF7EC" : "#FDF6B2",
          }}
        >
          {status}
        </span>
      </div>
    ),
  },
  {
    title: "Moderate Status",
    dataIndex: "moderateStatus",
    key: "moderateStatus",
    // render: (status) => (
    //   <div style={{ textAlign: "center" }}>
    //     {" "}
    //     <span
    //       className="font-semibold uppercase"
    //       style={{ color: status === "Verified" ? "green" : "red" }}
    //     >
    //       {status}
    //     </span>
    //   </div>
    // ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <div className="flex px-[12px] gap-[4px] items-center cursor-pointer hover:opacity-80 rounded-lg py-[8px] bg-[#1A56DB]">
          <Image src={EditIcon} alt="deleteIcon"></Image>
          <div className="text-white text-xs">Edit</div>
        </div>
        <div className="flex px-[12px] gap-[4px] items-center cursor-pointer hover:opacity-80 rounded-lg py-[8px] bg-red-600">
          <Image src={DeleteIcon} alt="deleteIcon"></Image>
          <div className="text-white text-xs">Delete</div>
        </div>
      </Space>
    ),
  },
  {
    title: "Profile",
    key: "profile",
    render: (_, record) => (
      <Space size="middle">
        <a
          className="hover:underline"
          style={{ color: "#1C64F2" }}
          href={`/profile/${record.key}`}
        >
          View Profile
        </a>
      </Space>
    ),
  },
];

function MentorsList() {
  const [data, setData] = useState<DataType[]>();

  useEffect(() => {
    const handleGetAllProfiles = async () => {
      try {
        const access_token = getCookie("accessToken");
        if (access_token) {
          const response = await getAllMember(access_token);
          const data = response.data;
          const formattedData = data
            .filter((item: Item) => item.role_id === 1)
            .map((item: Item) => ({
              key: item.user_id,
              fullName:
                item.first_name && item.last_name
                  ? `${item.first_name} ${item.last_name}`
                  : "Not Created",
              email: item.email,
              role:
                item.role_id === 1
                  ? "Member"
                  : item.role_id === 2
                  ? "Mentor"
                  : "",
              department: item.department,
              major: item.major,
              status: item.isVerified ? "Active" : "Pending",
              description: item.bio ?? "No bio yet!",
            }));
          setData(formattedData);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
        }
      }
    };
    handleGetAllProfiles();
  }, []);
  return (
    <>
      <Table
        bordered={true}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
        }}
        dataSource={data}
      ></Table>
    </>
  );
}

export default MentorsList;
