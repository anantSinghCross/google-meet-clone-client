import React from "react";

function Message({ data, isOwnMessage }) {
  return <p className={isOwnMessage ? "ownMessage" : "othersMessage"}>{data}</p>;
}

export default Message;
