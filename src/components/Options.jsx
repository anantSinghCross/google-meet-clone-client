import React, { useContext, useState } from "react";
import { SocketContext } from "../Context";

function Options() {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="flex gap-2 mt-2 justify-center">
      {callAccepted && !callEnded ? (
        <button
          className="px-3 py-1 self-end w-max bg-red-500 text-white rounded-md shadow font-semibold text-sm"
          onClick={leaveCall}
        >
          End Call
        </button>
      ) : (
        <>
        <div className="flex flex-col w-full max-w-xl gap-2 mt-2 justify-center">
            <input
              className="px-2 py-1 border rounded-md outline-blue-400"
              placeholder="Your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          <div className="flex gap-2">
            <input
              className="px-2 w-full py-1 border rounded-md outline-blue-400"
              placeholder="User ID to call"
              type="text"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded-md shadow font-semibold text-sm"
              onClick={() => callUser(idToCall)}
            >
              Call
            </button>
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default Options;
