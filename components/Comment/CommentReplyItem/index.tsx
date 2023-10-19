import React, { useState } from "react";
import ProfileImg from "@icons/header/profileImage.svg";
import Image from "next/image";
import { CommentReply } from "@/utils/types";
import { timeAgo } from "@/utils/dayFormat";
interface CommentReplyItemProps {
  comment: CommentReply[];
}

function CommentReplyItem({ comment }: CommentReplyItemProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [numberOfLike, setNumberOfLike] = useState<number>(0);
  const handleLikeComment = () => {
    if (isLiked === true) {
      setIsLiked(!isLiked);
      setNumberOfLike(numberOfLike - 1);
    } else {
      setIsLiked(!isLiked);
      setNumberOfLike(numberOfLike + 1);
    }
  };
  return (
    <div className="w-full px-3 mt-2 flex flex-col  gap-2 ">
      {comment.map((comment) => (
        <div
          key={comment.commentReply_id}
          className="w-full flex items-start gap-2"
        >
          <Image
            src={comment.user_image}
            width={40}
            height={40}
            alt="profile"
            style={{ width: "40px", height: "40px" }}
            className="object-cover rounded-[50%]"
          ></Image>
          <div className="w-full flex flex-col ">
            <div className="flex-col w-fit bg-[#F5F5F5] px-3 py-2 rounded-xl">
              <div className="flex flex-row gap-4 items-center">
                <div className="text-base font-semibold">
                  {comment.user_name}
                </div>
              </div>
              <div className="text-base font-medium">{comment.content}</div>
            </div>
            <div className="flex-row flex gap-5 items-center px-3 py-1">
              <div className="flex flex-row gap-2 items-center">
                <div
                  onClick={handleLikeComment}
                  className={`text-xs font-medium cursor-pointer hover:underline ${
                    isLiked ? "text-[#FF0000]" : "text-black"
                  }`}
                >
                  Like
                </div>
                <div className="text-xs font-medium cursor-default">
                  {numberOfLike === 0 ? "" : numberOfLike}
                </div>
              </div>
              <div className="text-[10px] text-gray-500">
                {timeAgo(comment.created_at)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentReplyItem;
