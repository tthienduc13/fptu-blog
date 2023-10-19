import React, { useState, useEffect } from "react";
import CommentItem from "@component/Comment/CommentItem";
import { Comment } from "@/utils/types";

interface CommentProps {
  blogComments: Comment[];
}
function CommentList({ blogComments }: CommentProps) {
  return (
    <div className="w-full flex p-5 flex-col  gap-5">
      {blogComments.map((comment, index) => (
        <CommentItem comment={comment} key={index}></CommentItem>
      ))}
    </div>
  );
}

export default CommentList;
