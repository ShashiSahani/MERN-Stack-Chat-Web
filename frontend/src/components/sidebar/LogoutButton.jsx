import React from "react";
import { IoIosLogOut } from "react-icons/io";

function LogoutButton() {
  return (
    <div className="mt-auto">
      <div className="tooltip  tooltip-right" data-tip="Logout">
        <IoIosLogOut className="w-9 h-9 text-white cursor-pointer" />
      </div>
    </div>
  );
}

export default LogoutButton;
