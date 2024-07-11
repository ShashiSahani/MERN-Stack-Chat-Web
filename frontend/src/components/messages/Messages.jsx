import React from 'react'
import Message from './Message'

function Messages() {
  return (
    <div className='flex  flex-col flex-1 overflow-auto px-5'>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
 
    </div>
  )
}

export default Messages
