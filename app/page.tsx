'use client'
import React, {useState, useEffect } from 'react';
import FeaturedBlog from "@/components/sections/home/FeatureBlog";
import MajorBlog from "@/components/sections/home/MajorBlog";
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

export default function Home() {

  const addComment = () => {
  socket.emit("new-comment", { blog_id: "430f34f4-681f-430c-b543-68205c1b5f28", content: "da chinh", user_id: "4e532b28-7b06-498d-b8ad-f82694307cea" });
   
    console.log("check")
  }


  return (
    <main className="absolute sm:w-full h-full lg:w-[calc(100%-100px)] flex flex-col justify-center right-0 top-[64px] bottom-0">
      <div className="w-full h-full">
        <FeaturedBlog></FeaturedBlog>
        <MajorBlog></MajorBlog>
        <button onClick={addComment}>add</button>
      </div>
    </main>
  );
}
