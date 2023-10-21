import React, { useEffect, useState } from "react";
import Image from "next/image";
import CreateReplyComment from "../CreateReplyComment";
import { Comment, CommentReply } from "@/utils/types";
import { timeAgo } from "@/utils/dayFormat";
import CommentReplyItem from "../CommentReplyItem";
import { getCookie } from "cookies-next";
import { getAllReply } from "@/apis/comment";

interface CommentItemProps {
  comment: Comment;
}

function CommentItem({ comment }: CommentItemProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [replyDialog, setReplyDialog] = useState<boolean>(false);
  const [numberOfLike, setNumberOfLike] = useState<number>(0);

  const [inputReply, setInputReply] = useState<string>("");
  const [commentReplyItems, setCommentReplyItems] = useState<CommentReply[]>(
    []
  );

  useEffect(() => {
    const handleGetReply = async () => {
      const access_token = getCookie("accessToken");
      try {
        if (access_token) {
          const response = await getAllReply(comment.comment_id, access_token);
          setCommentReplyItems(response.data);
        }
      } catch (error) {}
    };
    handleGetReply();
  }, [inputReply]);

  const handleLikeComment = () => {
    if (isLiked === true) {
      setIsLiked(!isLiked);
      setNumberOfLike(numberOfLike - 1);
    } else {
      setIsLiked(!isLiked);
      setNumberOfLike(numberOfLike + 1);
    }
  };

  const handleReplyComment = () => {
    setReplyDialog(!replyDialog);
  };
  const filteredComments = commentReplyItems.filter(
    (reply) => reply.comment_id === comment.comment_id
  );

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex items-start gap-2">
        <Image
          src={comment.user_image}
          width={40}
          height={40}
          alt="profile"
          style={{ width: "40px", height: "40px" }}
          className="object-cover rounded-[50%]"
        ></Image>
        <div className="w-full flex flex-col">
          <div className="flex-col w-fit bg-[#F5F5F5] px-3 py-2 rounded-xl">
            <div className="flex flex-row gap-4 items-center">
              <div className="text-base font-semibold">{comment.user_name}</div>
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
            <div
              onClick={handleReplyComment}
              className="text-xs font-medium cursor-pointer hover:underline"
            >
              Reply
            </div>
            <div className="text-[10px] text-gray-500">
              {timeAgo(comment.created_at)}
            </div>
          </div>
          <div className="w-full mt-[2px]">
            <div className="px-3 border-l-2`">
              <CommentReplyItem comment={filteredComments} />
            </div>
            {replyDialog && (
              <CreateReplyComment
                setReplyDialog={setReplyDialog}
                inputValue={inputReply}
                setInputValue={setInputReply}
                parentId={comment.comment_id}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
