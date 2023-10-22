import CreateComment from "@/components/Comment/CreateComment";
import React, { useState, useEffect } from "react";
import CommentList from "@component/Comment/CommentList";
import { useParams } from "next/navigation";
import { getAllComments } from "@/apis/comment";
import { getCookie } from "cookies-next";
import { Comment } from "@/utils/types";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function Comment() {
  console.log(socket);
  const [inputValue, setInputValue] = useState<string>("");
  const [blogComments, setBlogComments] = useState<Comment[]>([]);
  const param = useParams();

  const handleGetAllComments = async () => {
    const blog_id = param.blogID as string;
    const access_token = getCookie("accessToken");
    try {
      if (access_token) {
        const response = await getAllComments(blog_id, access_token);
        setBlogComments(response.data);
      }
    } catch (error) {
      // Handle error
    }
  };

  const handleCommentUpdated = () => {
    handleGetAllComments();
  };

  useEffect(() => {
    handleGetAllComments();

    socket.on("comment-updated", handleCommentUpdated);

    return () => {
      socket.off("comment-updated", handleCommentUpdated);
    };
  }, []);

  return (
    <>
      <div className="w-full pt-[20px]  pb-[40px] gap-5 flex flex-col">
        <div className="text-2xl font-bold text-[#14375F] ">Comments</div>
        <CreateComment
          socket={socket}
          inputValue={inputValue}
          setInputValue={setInputValue}
        ></CreateComment>
        {blogComments.length === 0 ? (
          <div className="p-5 bg-[#F5F5F5] text-center rounded-lg text-gray-500 font-semibold">
            Be the first person to share your thoughts!
          </div>
        ) : (
          <CommentList blogComments={blogComments}></CommentList>
        )}
      </div>
    </>
  );
}

export default Comment;
