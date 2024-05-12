import React, { useContext, useState } from "react";
import { SocketContext } from "../Context";
import { BiSolidPhoneCall, BiSolidPhoneOff } from "react-icons/bi";

function Options() {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="flex gap-2 mt-2 justify-center">
      {callAccepted && !callEnded ? (
        <button
          className="btn-red-grad"
          onClick={leaveCall}
        >
          <span className="flex gap-2 justify-center items-center">
            <BiSolidPhoneOff />
            End Call
          </span>
        </button>
      ) : (
        <>
          <div className="flex flex-col w-full max-w-md gap-2 mt-2 justify-center">
            <input
              className="px-4 py-2 border rounded-md outline-blue-400 shadow-inner"
              placeholder="Your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex gap-2">
              <input
                className="px-4 w-full py-2 border rounded-md outline-blue-400 shadow-inner"
                placeholder="User ID to call"
                type="text"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              <button
                className="btn-blue-grad"
                onClick={() => callUser(idToCall)}
              >
                <span className="flex gap-2 justify-center items-center">
                  <BiSolidPhoneCall />
                  Call
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Options;
