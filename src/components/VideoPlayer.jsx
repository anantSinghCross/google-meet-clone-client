import React, { useContext } from 'react'
import { SocketContext } from '../Context'

function VideoPlayer() {

  const { me, name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)

  return (
    <div className='grid grid-cols-2'>
      <div className='flex flex-col gap-1'>
        <div className='flex items-baseline gap-1'>
          <h4>My Video</h4>
          <h4 className=' font-mono text-sm text-gray-500 bg-gray-100 px-2 rounded'>Socket ID: {me}</h4>
        </div>
        { stream && <video className='rounded-lg' muted ref={myVideo} autoPlay width="400" />}
      </div>
      {
        callAccepted && !callEnded && (
          <div className='flex flex-col gap-1'>
            <div className='flex items-baseline gap-1'>
              <h4>{call.name || 'Name'}</h4>
              <h4 className=' font-mono text-sm text-gray-500 bg-gray-100 px-2 rounded'>{call.name}</h4>
            </div>
            <video className='rounded-lg' ref={userVideo} autoPlay width="400" />
          </div>
        )
      }
    </div>
  )
}

export default VideoPlayer