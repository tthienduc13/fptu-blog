import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
interface SearchProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}
function Search({ setSearchQuery }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="bg-white border-[1px] rounded-[10px] gap-[5px] w-full h-[40px] px-[15px] drop-shadow-md  flex items-center">
      <SearchOutlined />
      <input
        className="text-base w-full outline-none focus:outline-none"
        placeholder="Search blog...."
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
