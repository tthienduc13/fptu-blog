"use client";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import AllMember from "@component/sections/admin/AllMember";
import AllStudents from "@component/sections/admin/AllStudents";
import AllMentors from "@component/sections/admin/AllMentors";
const onChange = (key: string) => {
  console.log(key);
};
const items: TabsProps["items"] = [
  {
    key: "1",
    label: "All Members",
    children: <AllMember></AllMember>,
  },
  {
    key: "2",
    label: "Students",
    children: <AllStudents></AllStudents>,
  },
  {
    key: "3",
    label: "Mentors/Lecturers",
    children: <AllMentors></AllMentors>,
  },
];

function Admin() {
  return (
    <main className="absolute sm:w-full h-full lg:w-[calc(100%-100px)] right-0 top-[64px] bottom-0">
      <div className="w-full h-full py-[20px] px-[20px] ">
        <Tabs  defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </main>
  );
}

export default Admin;
