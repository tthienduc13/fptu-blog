import React, { useState } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify";
import { TagifySettings } from "@yaireo/tagify";
import "@component/ElementsSetting/TagField/Styling.scss";

interface TagFieldProps {
  allowTagNumber: number;
  suggestions: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  state: string[];
  placeholder: string;
}

function BlogTagField({
  allowTagNumber,
  suggestions = [],
  setState,
  state,
  placeholder,
}: TagFieldProps) {
  const baseTagifySettings = {
    blacklist: [],
    maxTags: allowTagNumber,
    backspace: "edit",
    placeholder: "",
    editTags: 1,
    dropdown: {
      enabled: 0,
    },
    callbacks: {} as any,
  };
  const [data, setData] = useState<string[]>(state);

  const handleChange = (e: CustomEvent) => {
    setData(e.detail.tagify.value.map((item: { value: string }) => item.value));
  };

  const settings: TagifySettings<Tagify.BaseTagData> = {
    ...baseTagifySettings,
    whitelist: suggestions,
    editTags: false,
    backspace: "edit",
    enforceWhitelist: true,
    callbacks: {
      add: handleChange,
      remove: handleChange,
      blur: handleChange,
      invalid: handleChange,
      click: handleChange,
      focus: handleChange,
      "edit:updated": handleChange,
      "edit:start": handleChange,
      "edit:input": handleChange,
    },
    placeholder: placeholder,
  };

  const handleSubmitTags = () => {};

  return (
    <div className="flex flex-col gap-[20px]">
      <div className={`form-group shadow-primary  rounded-[8px] p-[6px]`}>
        <Tags value={state} settings={settings} readOnly={false} />
      </div>
    </div>
  );
}

export default BlogTagField;
