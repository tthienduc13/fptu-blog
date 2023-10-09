import React from "react";
import { Modal, Button } from "antd";
import Image from "next/image";
import { dataTypeAdmin } from "@/utils/types";
import DeleteIcon from "@icons/page/admin/deleteIcon.svg";
import ConfirmIcon from "@icons/page/admin/confirmIcon.svg";
interface modalProps {
  title: string;
  state: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  method: () => void;
  selectedUser: dataTypeAdmin | null | undefined;
  content: string;
}
function AdminModal({
  isOpen,
  setIsOpen,
  method,
  selectedUser,
  title,
  content,
  state,
}: modalProps) {
  return (
    <>
      {" "}
      <Modal
        title={title}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <div className="flex justify-end items-center ">
              <Button
                onClick={() => setIsOpen(false)}
                className="flex px-[12px] gap-[4px] border-[1px] border-[#dddd] items-center cursor-pointer hover:opacity-80 rounded-lg py-[8px] bg-white"
              >
                <div className="text-gray-700 text-xs">Cancel</div>
              </Button>
              <Button
                onClick={method}
                className={`flex px-[12px] gap-[4px] items-center cursor-pointer rounded-lg py-[8px] ${
                  state === "Delete" ? "bg-red-600" : "bg-blue-600"
                }`}
              >
                <Image
                  src={
                    state === "Delete"
                      ? DeleteIcon
                      : state === "Edit"
                      ? ConfirmIcon
                      : ""
                  }
                  alt="icon"
                ></Image>
                <div className="text-white text-xs">
                  {state === "Delete" ? "Delete" : "Confirm"}
                </div>
              </Button>
            </div>
          </>
        )}
      >
        {selectedUser && (
          <>
            <div className=" border-t-2 border-[#ddddd] ">
              <p
                className={`text-lg font-semibold mt-[8px] ${
                  state === "Delete" ? "text-red-500" : "text-blue-500"
                }`}
              >
                {content}
              </p>
              <p className="mt-[12px] text-base font-medium">
                User Role: <span>{selectedUser.role}</span>
              </p>
              <p className="text-base font-medium">
                Email: {selectedUser.email}
              </p>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}

export default AdminModal;
