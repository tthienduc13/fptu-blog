"use client";

import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getCookie } from "cookies-next";
import axios from "axios";
import { getAllMember, deleteUser } from "@/apis/profile";
import DeleteIcon from "@icons/page/admin/deleteIcon.svg";
import EditIcon from "@icons/page/admin/editIcon.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import AdminModal from "@/components/AdminModal";
import { dataTypeAdmin, columnItem } from "@/utils/types";
import { assignModerator, unassignModerator } from "@/apis/moderator";

function MentorsList() {
  const [data, setData] = useState<dataTypeAdmin[]>();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<dataTypeAdmin | null>();
  const openDeleteModal = (record: dataTypeAdmin) => {
    setSelectedUser(record);
    setIsOpenDeleteModal(true);
  };

  const [isOpenAssignModal, setIsOpenAssignModal] = useState<boolean>(false);
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState<boolean>(false);
  const openEditModal = (record: dataTypeAdmin) => {
    setSelectedUser(record);
    if (record.moderateStatus === "Verified") {
      setIsOpenRemoveModal(true);
    } else {
      setIsOpenAssignModal(true);
    }
  };
  const handleGetAllProfiles = async () => {
    try {
      const access_token = getCookie("accessToken");
      if (access_token) {
        const response = await getAllMember(access_token);
        const data = response.data;
        const formattedData = data
          .filter((item: columnItem) => item.role_id === 2)
          .map((item: columnItem) => ({
            key: item.user_id,
            user_id: item.user_id,
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
            isVerified: item.isVerified ? "Active" : "Pending",
            moderateStatus: item.moderateStatus ? "Verified" : "Not Verified",
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

  const hanldeAssignModerator = async () => {
    try {
      const access_token = getCookie("accessToken");
      if (access_token && selectedUser) {
        const response = await assignModerator(
          selectedUser.user_id,
          access_token
        );
        toast.success(
          `Assign user ${selectedUser.email} as moderator successfully!`
        );
      }
      handleGetAllProfiles();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error("Deleting failed!");
      }
    }
    setIsOpenAssignModal(false);
  };

  const handleUnassignModerator = async () => {
    try {
      const access_token = getCookie("accessToken");
      if (access_token && selectedUser) {
        const response = await unassignModerator(
          selectedUser.user_id,
          access_token
        );
        toast.success(
          `Remove user ${selectedUser.email} of a moderator successfully!`
        );
      }
      handleGetAllProfiles();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error("Deleting failed!");
      }
    }
    setIsOpenRemoveModal(false);
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
      title: "Deparment",
      dataIndex: "department",
      key: "department",
      render: (text) => <div style={{ textAlign: "center" }}>{text}</div>,
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
      title: "Moderate Status",
      dataIndex: "moderateStatus",
      key: "moderateStatus",
      render: (_, record) => (
        <div className="flex justify-between items-center">
          {" "}
          <span
            className="font-semibold text-sm rounded-lg uppercase py-[2px] px-[10px]"
            style={{
              color:
                record.moderateStatus === "Verified" ? "#03543F" : "#9B1C1C",
              backgroundColor:
                record.moderateStatus === "Verified" ? "#DEF7EC" : "#FDE8E8",
            }}
          >
            {record.moderateStatus}
          </span>
          <div
            onClick={() => openEditModal(record)}
            className="flex px-[12px] gap-[4px] items-center cursor-pointer hover:opacity-80 rounded-lg py-[8px] bg-[#1A56DB]"
          >
            <Image src={EditIcon} alt="deleteIcon"></Image>
            <div className="text-white text-xs">Edit</div>
          </div>
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
            className="flex px-[12px] gap-[4px] items-center cursor-pointer hover:opacity-80 rounded-lg py-[8px] bg-red-600"
          >
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
  return (
    <>
      <AdminModal
        isOpen={isOpenDeleteModal}
        setIsOpen={setIsOpenDeleteModal}
        method={handleDeleteUser}
        selectedUser={selectedUser}
        title="Delete user"
        content="Are you sure you want to delete this user?"
        state="Delete"
      ></AdminModal>
      <AdminModal
        isOpen={isOpenAssignModal}
        setIsOpen={setIsOpenAssignModal}
        method={hanldeAssignModerator}
        selectedUser={selectedUser}
        title="Mark as moderator"
        content="Are you sure you want to assign this user as a moderator?"
        state="Edit"
      ></AdminModal>
      <AdminModal
        isOpen={isOpenRemoveModal}
        setIsOpen={setIsOpenRemoveModal}
        method={handleUnassignModerator}
        selectedUser={selectedUser}
        title="Remove moderator"
        content="Are you sure you want to remove moderator of this user ?"
        state="Delete"
      ></AdminModal>
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
