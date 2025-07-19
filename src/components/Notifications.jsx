import { useContext } from "react";
import { SocketContext } from "../Context";
import { BiSolidPhoneIncoming } from "react-icons/bi";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="fixed border-2 border-indigo-400 shadow-md shadow-indigo-100 top-4 right-4 flex gap-4 p-3 rounded-xl justify-center w-max items-center">
          <BiSolidPhoneIncoming className=" fill-indigo-500" size={25}/>
          <h3> {call.name === "" ? "Unknown person" : call.name} is calling</h3>
          <button className="btn-blue-grad" onClick={answerCall}>
            Accept
          </button>
        </div>
      )}
    </>
  );
};
export default Notifications;
