import React from "react";

import UserDropDown from "../UserDropDown";
import AdminDropDown from "../AdminDropDown";
import MentorDropDown from "../MentorDropDown";
function DropDown() {
  var role = "user";
  return (
    <>
      {role === "admin" ? (
        <AdminDropDown />
      ) : role === "mentor" ? (
        <MentorDropDown />
      ) : (
        <UserDropDown />
      )}
    </>
  );
}

export default DropDown;
