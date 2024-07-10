import React from "react";

function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatar.iran.liara.run/public/girl" alt="Tailwind css chat button" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-300`}>
        <div className="chat-footer opacity-5 text-xs flex gap-1 items-center">
          12:42
        </div>
      </div>
    </div>
  );
}

export default Message;
