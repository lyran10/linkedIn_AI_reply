import React from 'react'
import { Avatar } from '../../common/avatar'
import { Header } from '../../common/header'
import pic from "../../assets/images/avatar.png"
import { ThreeDots } from '../../assets/svg/threeDots'
import { Edit } from '../../assets/svg/edit'
import { UpArrow } from '../../assets/svg/upArrow'
import { Buttons } from '../../common/buttons'

export const MessagingChatBox = () => {
  
  const buttons = [
    {
      id : "msgChatBoxThreeDots",
      content : "",
      children : <ThreeDots width='20' height='20'/>,
      classes : "",
      handleClick : () => {}
    },
    {
      id : "msgChatBoxEdit",
      content : "",
      children : <Edit width='15' height='15'/>,
      classes : "",
      handleClick : () => {}
    },
    {
      id : "msgChatBoxUpArrow",
      content : "",
      children : <UpArrow width='13' height='13'/>,
      classes : ``,
      handleClick : () => {},
    },
  ]
  
  return (
  <div className='hidden lg:flex xl:flex 2xl:flex justify-between items-center absolute right-5 bottom-0 w-[300px] bg-[rgba(255,255,255,1)] rounded-t-lg py-1  px-3'>
     <div className='flex gap-1 text-[14px]'>
      <Avatar width='w-[40px]' height='h-[40px]' >
        <img src={pic}/>
      </Avatar>
      <Header head='Messaging'><></></Header>
     </div>
     <Buttons buttons={buttons}/>
  </div>
  )
}
