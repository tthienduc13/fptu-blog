import React from "react";
import { SearchResult } from "@/utils/types";
import Image from "next/image";
import SampleImage from "@image/blogSample.png";
import Link from "next/link";

interface ResultProp {
  result: SearchResult[];
}

function SearchList({ result }: ResultProp) {
  return (
    <div className="w-full flex overflow-y-scroll flex-col border-[1px] drop-shadow-md bg-white rounded-[10px] max-h-[300px] h-full">
      {result && result.length > 0 ? (
        result.map((item) => (
          <div
            key={item.blog_id}
            className="px-[10px] py-[15px] gap-2 flex items-center"
          >
            <div className="h-[40px] w-[40px] rounded-[50%] overflow-hidden">
              <Image
                src={item.visual ?? SampleImage}
                width={100}
                height={100}
                style={{ width: "100%", height: "100%" }}
                alt="image"
                className="object-cover"
              ></Image>
            </div>
            <Link href={`blog/detail/${item.blog_id}`}>
              <div className="text-sm font-semibold">{item.title}</div>
            </Link>
          </div>
        ))
      ) : (
        <div className="px-[10px] py-[15px] flex items-center">
          <div className="text-base">No results found.</div>
        </div>
      )}
    </div>
  );
}

export default SearchList;
