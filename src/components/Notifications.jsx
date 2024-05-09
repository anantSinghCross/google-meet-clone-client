import { useContext } from "react";
import { SocketContext } from "../Context";

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div className="fixed shadow-lg bottom-4 right-4 flex gap-4 p-3 border border-blue-200 rounded-md bg-blue-50 justify-center w-max">
                    <h3> {call.name} is calling.</h3>
                    <button className=" w-max h-max px-3 py-1 bg-blue-500 text-white rounded-md shadow font-semibold text-sm" onClick={answerCall}>
                        Answer Call
                    </button>
                </div>
            )}
        </>
    );
};
export default Notifications;
