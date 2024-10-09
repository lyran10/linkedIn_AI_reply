import React from 'react'
import { Navbar } from '../navbar/navbar'
import { ProfileDashboard } from '../profileDashboard/profileDashboard'
import { Popover } from '../common/popover'
import { AIGeneratePopup } from '../profileDashboard/aiGeneratorPopup/aiGeneratePopup'
import { MessagingChatBox } from '../profileDashboard/messagingChatBox/messagingChatBox'

export const Main = () => {
  return (
    <main className='relative h-screen w-full bg-[rgba(244,242,238,1)] overflow-hidden'>
      <Navbar/>
      <ProfileDashboard/>
      
      <Popover >
        <AIGeneratePopup/>
      </Popover>

      <MessagingChatBox/>
    </main>
  )
}
