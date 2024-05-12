import React, { useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "../Context";
import Message from "./Message";
import { BiSend } from "react-icons/bi";
import { LuSend } from "react-icons/lu";

// Chat only works when we have an active call i.e. a P2P connection already exists
function Chat() {
  const [message, setMessage] = useState("");
  const scrollDummyDiv = useRef(null);
  useEffect(() => {
    if (scrollDummyDiv.current) {
      scrollDummyDiv.current.scrollIntoView({ behavior: "smooth" });
    }
  });
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
          <div className="flex flex-col gap-2 p-3 px-5 max-h-72 sm:max-h-52 md:max-h-48 overflow-auto">
            {messageList}
            <div ref={scrollDummyDiv}></div>
          </div>
          <div className="flex w-full justify-center border bg-slate-50 p-3">
            <input
              className="w-full p-2 px-4 py-2 border rounded-md outline-blue-400 shadow-inner"
              type="text"
              placeholder="Type your message ✍️"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className=" ml-2 px-4 py-2 bg-gradient-to-tr from-indigo-600 to-blue-500 text-white shadow-lg shadow-indigo-300 rounded-md font-semibold text-sm active:from-indigo-700 active:to-blue-600"
              onClick={() => {
                if (message !== "") {
                  sendMessage(message);
                  setMessage("");
                }
              }}
            >
              <span className="flex gap-2 justify-center items-center">
                <LuSend />
                Send
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
