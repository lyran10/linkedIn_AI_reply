import React from 'react'
import { AutoEdit } from '../../assets/svg/autoEdit';

export const SuggestedReply = () => {
  const autoMsg = [
    {
      id : "interested",
      msg : "Yes, Interested..."
    },
    {
      id : "noThanks",
      msg : "No thanks..."
    },
  ]

  return (
    <div className='sticky bottom-0 p-2 w-full bg-white flex justify-center items-center gap-3 before:absolute before:content-"" 
    before:w-full before:h-[2px] before:bg-[#01754f] before:bottom-0 text-[10px] md:text-[14px]'>
      {
        autoMsg.map(({id, msg}) => {
          return(
            <span key={id} className='relative py-1 px-2 border-[2px] w-auto border-blue-700 rounded-full flex justify-center items-center text-blue-700'>
              <AutoEdit width='15' height='15'/>
              <span className='px-3 before:absolute before:content before:w-[1px] before:h-full before:bg-blue-700 before:top-0 before:left-7'>{msg}</span>
            </span>
          )
        })
      }
    </div>
  )
}
