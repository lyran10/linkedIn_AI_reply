import React from 'react'
import { Avatar } from '../../../common/avatar'
import pic from "../../../assets/images/avatar.png"
import { Header } from '../../../common/header'
import { SuggestedReply } from '../suggestedReply'
import { DisplayMessages } from './displayMessages'

export const Messages = () => {
  const messages = [
    {
      id : "1",
      msg : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
      date : "7 Dec 2023"

    }
  ]

  return (
    <div className='relative w-full'>
      <div className='flex'>
      <Avatar width='w-[50px]' height='h-[50px]' >
        <img src={pic}/>
      </Avatar>
      <Header head='John Doe'><></></Header>
      </div>
      <DisplayMessages messages={messages}/>
      <SuggestedReply/>
    </div>
  )
}
