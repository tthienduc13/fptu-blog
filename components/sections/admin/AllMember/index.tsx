"use client";

import React, { useEffect, useState } from "react";
import { Table, Space, Modal, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getCookie } from "cookies-next";
import axios from "axios";
import { deleteUser, getAllMember } from "@/apis/profile";
import DeleteIcon from "@icons/page/admin/deleteIcon.svg";
import Image from "next/image";
import { toast } from "react-toastify";

interface DataType {
  key: React.Key;
  user_id: string;
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

function MemberList() {
  const [data, setData] = useState<DataType[]>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<DataType | null>();
  const openDeleteModal = (record: DataType) => {
    setSelectedUser(record);
    setIsOpenModal(true);
  };
  console.log(selectedUser);
  const handleGetAllProfiles = async () => {
    try {
      const access_token = getCookie("accessToken");
      if (access_token) {
        const response = await getAllMember(access_token);
        const data = response.data;
        const formattedData = data.map((item: Item) => ({
          key: item.user_id,
          user_id: item.user_id,
          fullName:
            item.first_name && item.last_name
              ? `${item.first_name} ${item.last_name}`
              : "Not Created",
          email: item.email,
          role:
            item.role_id === 1 ? "Member" : item.role_id === 2 ? "Mentor" : "",
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
  useEffect(() => {
    handleGetAllProfiles();
  }, []);

  const handleDeleteUser = async () => {
    try {
      const access_token = getCookie("accessToken");
      if (access_token && selectedUser) {
        const response = await deleteUser(selectedUser.user_id, access_token);
        toast.success(`Deleted user ${selectedUser.email} successfully!`);
      }
      handleGetAllProfiles();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error("Deleting failed!");
      }
    }
    setIsOpenModal(false);
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
      title: "Role",
      dataIndex: "role",
      key: "role",
      filters: [
        {
          text: "Member",
          value: "Member",
        },
        {
          text: "Mentor",
          value: "Mentor",
        },
      ],
    },
    {
      title: "Deparment",
      dataIndex: "department",
      key: "department",
      render: (text) => <div style={{ textAlign: "center" }}>{text}</div>,
    },
    {
      title: "Major",
      dataIndex: "major",
      key: "major",
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            onClick={() => openDeleteModal(record)}
            // onClick={() => handleDeleteUser(record.user_id, record.email)}
            className="flex px-[12px] gap-[4px] items-center cursor-pointer hover:opacity-80 rounded-lg py-[8px] bg-red-600"
          >
            <Image src={DeleteIcon} alt="deletIcon"></Image>
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
  return (
    <>
      <Modal
        title="Delete User"
        open={isOpenModal}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <div className="flex justify-end items-center ">
              <Button
                onClick={() => setIsOpenModal(false)}
                className="flex px-[12px] gap-[4px] border-[1px] border-[#dddd] items-center cursor-pointer hover:opacity-80 rounded-lg py-[8px] bg-white"
              >
                <div className="text-gray-700 text-xs">Cancel</div>
              </Button>
              <Button
                onClick={handleDeleteUser}
                className="flex px-[12px] gap-[4px] items-center cursor-pointer rounded-lg py-[8px] bg-red-600"
              >
                <Image src={DeleteIcon} alt="deletIcon"></Image>
                <div className="text-white text-xs">Delete</div>
              </Button>
            </div>
          </>
        )}
      >
        {selectedUser && (
          <>
            <p className="text-lg font-semibold">
              Are you sure you want to delete this user?
            </p>
            <p className="mt-[12px] text-base font-medium">
              UserID: <span>{selectedUser.user_id}</span>
            </p>
            <p className="text-base font-medium">Email: {selectedUser.email}</p>
          </>
        )}
      </Modal>
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

export default MemberList;
