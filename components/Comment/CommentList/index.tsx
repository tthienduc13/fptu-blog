import React, { useState, useEffect } from "react";
import CommentItem from "@component/Comment/CommentItem";
import { Comment } from "@/utils/types";
import { Socket } from "socket.io-client";

interface CommentProps {
  blogComments: Comment[];
  socket: Socket;
}
function CommentList({ blogComments, socket }: CommentProps) {
  return (
    <div className="w-full flex p-5 flex-col  gap-5">
      {blogComments.map((comment, index) => (
        <CommentItem
          socket={socket}
          comment={comment}
          key={index}
        ></CommentItem>
      ))}
    </div>
  );
}

export default CommentList;
