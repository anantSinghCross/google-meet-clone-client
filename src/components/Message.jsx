import React from "react";

function Message({ data, isOwnMessage }) {
  const classNames = isOwnMessage
    ? "rounded-ee-none self-end border border-blue-200 bg-blue-50 text-gray-500 "
    : "rounded-es-none border bg-gray-50 text-gray-500 ";
  return <p className={` max-w-80 w-max rounded-xl p-1 px-3 ${classNames}`}>{data}</p>;
}

export default Message;
