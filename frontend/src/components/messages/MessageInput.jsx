import React from 'react'
import {BsSend} from 'react-icons/bs'
function MessageInput() {
  return (
    <div className='px-y my-3 relative'>
        <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 text-white' placeholder='Send Message...'/>
      <button type='submit' className=" absolute inset-y-0 end-0 flelx items-center pe-3">
        <div className='tooltip' data-tip="Send">
        <BsSend className='text-white w-5 h-5 p-0'/></div>
      </button>
    </div>
  )
}

export default MessageInput
