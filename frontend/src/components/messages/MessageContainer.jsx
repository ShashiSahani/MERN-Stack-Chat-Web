import React from 'react'
import Messages from './Messages'

function MessageContainer() {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
   <>
   
   <div className='bg-slate-500 px-4 py-x mb-2'>
        <span className='label-text'>To:</span>
        <span className='font-bold text-gray-100  px-4 py-x mb-2'>Shashi Sahani</span>
      </div>
   </>
      <Messages/>
    </div>
  )
}

export default MessageContainer
