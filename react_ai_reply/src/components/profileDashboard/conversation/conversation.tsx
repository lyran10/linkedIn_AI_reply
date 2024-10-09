import React from 'react'
import { Header } from '../../common/header'
import { ConversationWindow } from './conversationWindow';
import { MessageInput } from './messageInput';
import { ThreeDots } from '../../assets/svg/threeDots';
import { Edit } from '../../assets/svg/edit';
import { Star } from '../../assets/svg/star';
import { Buttons } from '../../common/buttons';

export const Conversation = () => {
  const buttons = [
    {
      id : "chatThreeDots",
      content : "",
      children : <ThreeDots width='20' height='20'/>,
      classes : "",
      handleClick : () => {}
    },
    {
      id : "chatEdit",
      content : "",
      children : <Edit width='15px' height='15px'/>,
      classes : "",
      handleClick : () => {}
    },
    {
      id : "chatStar",
      content : "",
      children : <Star width='20' height='20'/>,
      classes : "",
      handleClick : () => {}
    },
  ]
  
  return (
    <div className="relative w-[60%] h-full">
      <div className='h-[10%]'>
      <Header head='John Doe' subHead="Full Stack Developer" p="py-1 px-3" border='border-b-[1px]'>
        <Buttons buttons={buttons}/>
      </Header>
      </div>
      <ConversationWindow/>
      <MessageInput />
    </div>
  )
}
