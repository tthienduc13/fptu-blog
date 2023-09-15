import React from "react";
import Image from "next/image";

interface IProps {
  fileStorage: File | null;
}

function FilePreview({ fileStorage }: IProps) {
  if (!fileStorage) {
    return <div>No file selected.</div>;
  }

  if (fileStorage.type.includes("video/")) {
    return (
      <div>
        {" "}
        <video
          className="object-cover w-full h-48"
          src={URL.createObjectURL(fileStorage)}
          controls
        />
      </div>
    );
  } else {
    return (
      <div className="h-48px">
        <Image
          className="object-cover w-full h-48"
          src={URL.createObjectURL(fileStorage)}
          alt="Preview"
          layout="fill"
        />
      </div>
    );
  }
}

export default FilePreview;
