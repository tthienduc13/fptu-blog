"use client";

import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { getCookie } from "cookies-next";
import axios from "axios";
import { deleteUser, getAllMember } from "@/apis/profile";
import DeleteIcon from "@icons/page/admin/deleteIcon.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { dataTypeAdmin, columnItem } from "@/utils/types";
import AdminModal from "@/components/AdminModal";

function MemberList() {
  const [data, setData] = useState<dataTypeAdmin[]>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<dataTypeAdmin | null>();
  const openDeleteModal = (record: dataTypeAdmin) => {
    setSelectedUser(record);
    setIsOpenDeleteModal(true);
  };

  const handleGetAllProfiles = async () => {
    try {
      const access_token = getCookie("accessToken");
      if (access_token) {
        const response = await getAllMember(access_token);
        const data = response.data;
        const formattedData = data.map((item: columnItem) => ({
          key: item.user_id,
          user_id: item.user_id,
          fullName:
            item.first_name && item.last_name
              ? `${item.first_name} ${item.last_name}`
              : "Not Created",
          email: item.email,
          role:
            item.role_id === 0
              ? "Member"
              : item.role_id === 1
              ? "Mentor"
              : "Admin",
          department: item.department,
          major: item.major,
          isVerified: item.isVerified ? "Active" : "Pending",
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
    setIsOpenDeleteModal(false);
  };

  const filteredData: dataTypeAdmin[] | undefined = data?.filter((item) =>
    item.fullName.toLowerCase().includes(searchQuery)
  );

  const onChange: TableProps<dataTypeAdmin>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns: ColumnsType<dataTypeAdmin> = [
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
      dataIndex: "isVerified",
      key: "isVerified",
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
      <div className="self-start flex flex-row sm:justify-start justify-center items-center w-full gap-2 mb-[12px]">
        <label>Search:</label>
        <input
          placeholder="User's Name"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[300px] border-[1px] border-black rounded-md px-2 py-2 outline-none"
        ></input>
      </div>
      <AdminModal
        isOpen={isOpenDeleteModal}
        setIsOpen={setIsOpenDeleteModal}
        method={handleDeleteUser}
        selectedUser={selectedUser}
        title="Delete user"
        content="Are you sure you want to delete this user?"
        state="Delete"
      ></AdminModal>
      <Table
        onChange={onChange}
        bordered={true}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
        }}
        dataSource={searchQuery ? filteredData : data}
      ></Table>
    </>
  );
}

export default MemberList;
