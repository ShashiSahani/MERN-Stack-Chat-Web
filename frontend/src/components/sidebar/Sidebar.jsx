import React from "react";
import SearchInput from "./SearchInput";
import ConversationsContainter from "./ConversationsContainter";
import LogoutButton from "./LogoutButton";
import MessageContainer from "../messages/MessageContainer";

function Sidebar() {
  return (
    <div className="flex gap-1">
      <SearchInput />
      <div className="divider divide-gray-900 px-5"></div>
      <ConversationsContainter />
      <LogoutButton />
      <MessageContainer />
    </div>
  );
}

export default Sidebar;
