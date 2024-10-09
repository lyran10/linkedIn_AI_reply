import React from 'react'
import { Conversation } from './conversation/conversation'
import { UsersList } from './usersList/usersList'

export const ProfileDashboard = () => {
  return (
    <section className='w-[95%] lg:w-[83%] xl:w-[83%] 2xl:w-[83%] h-[88vh] mt-5 m-auto'>
        <div className='flex justify-center items-center w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%] h-full bg-[rgba(255,255,255,1)] rounded-md'>
            <UsersList />
            <Conversation/>
        </div>
    </section>
  )
}
