import React from "react";
import { Input } from "antd";
import ProfileImg from "@icons/header/profileImage.svg";
import Image from "next/image";
import ModifyButton from "@component/ModifyButton";
import { getCookie } from "cookies-next";
import { useParams } from "next/navigation";
import { addComment } from "@/apis/comment";
import { toast } from "react-toastify";
import axios from "axios";
interface CreateCommentProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
const { TextArea } = Input;

function CreateComment({ inputValue, setInputValue }: CreateCommentProps) {
  const param = useParams();
  const hanldeSubmitComment = async () => {
    const accessToken = getCookie("accessToken");
    const user_id = getCookie("user_id");
    try {
      if (accessToken && user_id) {
        if (inputValue === "") {
          toast.error("Please do not leave a blank");
        } else {
          const newComment = {
            user_id: user_id,
            blog_id: param.blogID as string,
            content: inputValue,
          };
          const response = await addComment(newComment);
          toast.success(response.data);
          setInputValue("");
        }
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err);
      }
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      hanldeSubmitComment();
    }
  };
  return (
    <>
      <div className="w-4/5 flex flex-row items-center gap-3">
        <Image src={ProfileImg} width={40} height={40} alt="profile"></Image>
        <TextArea
          value={inputValue}
          size="large"
          style={{ width: "100%" }}
          onChange={(e) => setInputValue(e.target.value)}
          allowClear={true}
          placeholder="Write a comment..."
          autoSize={{ minRows: 1 }}
          onPressEnter={(e) => handleKeyPress(e)}
        />
        <div>
          <ModifyButton
            textContent={"Comment"}
            icon={""}
            iconPosition={"left"}
            backgroundColor={"bg-blue-700"}
            method={() => {
              hanldeSubmitComment();
            }}
            tailwind={"text-white hover:opacity-80"}
          ></ModifyButton>
        </div>
      </div>
    </>
  );
}

export default CreateComment;
