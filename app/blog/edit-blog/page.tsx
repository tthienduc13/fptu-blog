"use client";
import React from "react";
import BackIcon from "@icons/page/blog/backIcon.svg";
import "@/app/globals.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogTag from "@/components/BlogTag";
import CategoryTag from "@/components/CategoryTag";
import BrowseMedia from "@/components/BrowseMedia";
// import EditorWrapper from "@/components/Editor/EditorWrapper";
import EditorBlog from "@component/EditorBlog";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";
import { CssBaseline, Grid, Typography } from "@mui/material";
function EditBlog() {
  const [importedImage, setImportedImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string>("");
  const [htmlString, setHtmlStringg] = useState<string>("");
  const router = useRouter();
  return (
    <>
      <main className=" absolute w-full flex flex-col gap-[20px] right-0 top-[56px] lg:top-[64px] bottom-0 h-fit p-[20px] lg:p-[40px]">
        <div className="w-full flex items-center justify-between">
          <h1 className="md:text-[30px] md:leading-[45px] text-2xl  font-bold select-none">
            Create Blog
          </h1>
          <div
            onClick={() => router.back()}
            className="flex items-center gap-[6px] cursor-pointer hover:gap-[10px] duration-300"
          >
            <Image
              src={BackIcon}
              className="md:h-[20px] md:w-[20px] w-[16px] h-[16px]"
              height={20}
              width={20}
              alt="Back"
            ></Image>
            <div className="text-[#707070] text-base md:text-xl md:leading-[24px] font-medium ">
              Go Back
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-[calc(50%-20px)] flex flex-col gap-2">
            <h3 className="text-base text-[#14375F] font-medium">
              Blog&#39;s Title:
            </h3>
            <input
              type="text"
              placeholder="Write title here"
              className="border-2 px-3 py-3 outline-[#0066B2] border-gray-300 rounded-[12px] w-full"
            />
          </div>
          <div className="w-[calc(50%-20px)] flex flex-col gap-2">
            <CategoryTag></CategoryTag>
          </div>
        </div>
        <div>
          <BrowseMedia
            formTitle="Your image or video"
            fileStorage={importedImage}
            setFileStorage={setImportedImage}
            setFileURL={setImageURL}
            page="create_blog"
          ></BrowseMedia>
        </div>
        <div>
          <BlogTag></BlogTag>
        </div>
        <div>
          <EditorBlog
            formTitle="Your content"
            htmlString={htmlString}
            setHtmlString={setHtmlStringg}
            pageName="create_notification"
          ></EditorBlog>
          {/* <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <Grid container flexDirection="column" sx={{ minHeight: "50vh" }}>
              <Grid item>
                <Typography variant="h3">Lexcial Editor text</Typography>
              </Grid>
              <Grid item xs={12} sx={{ width: "100%" }}>
                <EditorWrapper></EditorWrapper>
              </Grid>
            </Grid>
          </ThemeProvider> */}
        </div>
      </main>
    </>
  );
}

export default EditBlog;
