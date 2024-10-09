import React from 'react'
import { Avatar } from '../../common/avatar'
import pic  from "../../assets/images/avatar.png"
import { Header } from '../../common/header'
import { Messages } from './messages/messages'

export const ConversationWindow = () => {
  return (
    <div className='relative overflow-y-scroll h-[60%]'>
      <Avatar width='w-[100px]' height='' >
        <img src={pic}/>
      </Avatar>
      <Header head='John Doe' subHead='Full Stack Developer' p='px-8 pb-3' border='border-b-[1px]'><></></Header>
      <Messages/>
    </div>
  )
}
