import React, { useContext, useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import { io } from "socket.io-client";
import { SocketContext } from "../Context";
import Message from "./Message";

// Chat only works when we have an active call i.e. a P2P connection already exists
function Chat() {
  const [message, setMessage] = useState("");
  const scrollDummyDiv = useRef(null);
  useEffect(() => {
    scrollDummyDiv.current.scrollIntoView({ behavior: "smooth" });
  })
  const { msgs, callAccepted, callEnded, sendMessage } = useContext(SocketContext);
  const messageList =
    msgs.length > 0
      ? msgs.map(({ data, isOwnMessage, id }) => {
          return <Message key={id} data={data} isOwnMessage={isOwnMessage} />;
        })
      : null;
  return (
    <>
      {callAccepted && !callEnded && (
        <div className="absolute bottom-0 w-full">
          <div className="flex flex-col gap-2 p-3 px-5 max-h-52 overflow-auto border-t">
            {messageList}
            <div ref={scrollDummyDiv}></div>
          </div>
          <div className="flex w-full justify-center border bg-slate-50 p-2">
            <input
              className="w-full border rounded-md p-2"
              type="text"
              placeholder="Type your message ✍️"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-md shadow font-semibold text-sm"
              onClick={() => {
                if(message !== '') {
                  sendMessage(message);
                  setMessage("");
                }
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
