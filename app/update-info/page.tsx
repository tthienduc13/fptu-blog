"use client";
import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { toast } from "react-toastify";
import GeneralInformation from "@/components/sections/updateInfo/GeneralInformation";
import AvatarChanging from "@/components/AvatarChanging";
import WelcomeSection from "@/components/sections/updateInfo/Welcome";
import Finish from "@/components/sections/updateInfo/Finish";
import { useRouter } from "next/navigation";

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: "Welcome",
      content: <WelcomeSection></WelcomeSection>,
    },
    {
      title: "Update info",
      content: <GeneralInformation></GeneralInformation>,
    },
    {
      title: "Update profile image",
      content: <AvatarChanging></AvatarChanging>,
    },
    {
      title: "Finish",
      content: <Finish></Finish>,
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  const router = useRouter();

  const hanldeFinish = () => {
    toast.success("Update info successfully");
    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center ">
        <div className="w-[70%]">
          <Steps current={current} items={items} />
          <div style={contentStyle}>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="default" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="default" onClick={hanldeFinish}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
