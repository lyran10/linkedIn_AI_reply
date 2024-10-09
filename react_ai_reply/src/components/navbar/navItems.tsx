import React from 'react'
import { Avatar } from '../common/avatar'
import pic from "./../assets/images/avatar.png"
import { NavItemsType } from '../../types/types'
import { useSelectById } from '../../customHooks/useSelectById'
import { Home } from '../assets/svg/home'
import { Network } from '../assets/svg/network'
import { Jobs } from '../assets/svg/jobs'
import { Messaging } from '../assets/svg/messaging'
import { Notification } from '../assets/svg/notification'
import { ForBusiness } from '../assets/svg/forBusiness'
import { DownArrow } from '../assets/svg/downArrow'
import { Button } from '../common/button'

export const NavItems = () => {
  const {currentId, handleClick} = useSelectById()
 
  const items = [
    {
      id : "home",
      icon : <Home width='24' height='24' />,
      content : "Home",
      arrow : false,
      bubble : {
        icon : <Avatar width='w-4' height='h-4' position='absolute top-2 left-[55%]' bg='bg-red-600'>
          <div className='w-2 h-2 rounded-full bg-white '></div>
        </Avatar>
      }
    },
    {
      id : "myNetwork",
      icon : <Network width='24' height='24'/>,
      content : "My Network",
      arrow : false,
      bubble : {
        icon : <Avatar width='w-4' height='h-4' position='absolute top-2 left-[55%]' bg='bg-red-600'><span className='text-white'>15</span></Avatar>
      }
    },
    {
      id : "jobs",
      icon : <Jobs width='24' height='24'/>,
      content : "Jobs",
      arrow : false,
      bubble : null
    },
    {
      id : "messaging",
      icon : <Messaging width='24' height='24'/>,
      content : "Messaging",
      arrow : false,
      bubble : null
    },
    {
      id : "notifications",
      icon : <Notification width='24' height='24'/>,
      content : "Notifications",
      arrow : false,
      bubble : null
    },
    {
      id : "me",
      icon : <Avatar width='w-6' height='h-6'><img src={pic} alt="No image" /></Avatar>,
      content : "Me",
      arrow : true,
      bubble : null
    },
    {
      id : "forBusiness",
      icon : <ForBusiness width='24' height='24'/>,
      content : "For Business",
      arrow : true,
      bubble : null
    },
  ]

  const itemClasses = (id : string, arrow : boolean) => {
    return `
          ${id === "me" ? "border-r-[1px]" : ""}
          h-full px-4 relative flex flex-col gap-1 justify-center items-center ${id === currentId ?
          `text-black ${arrow ? "" : "before:absolute before:content-'' before:w-full before:h-[2px] before:bg-black before:bottom-0" }` : 
          "text-[rgba(0,0,0,.6)] before:w-0"} before:duration-300  hover:text-black
          ` 
  }

  const displayItems = (array : NavItemsType[]) => {
    return (
      array.map(({id, icon, content, bubble, arrow}) => {
        return (
          <Button key={id} content={""} id={id} handleClick={handleClick} classes={itemClasses(id, arrow)}>
            {icon}
            <div className='flex justify-center items-center'>
              <span>{content}</span>
               {/*down arrow if needed */}
              {arrow && <DownArrow width='20' height='20'/>}
            </div>
            {/* red bubble over icon if needed */}
            {bubble && bubble.icon}
          </Button>
        )
      })
    )
  }

  return (
    <ul className={`flex justify-center items-center text-[10px] h-full`}>
    {displayItems(items)}
    </ul>
  )
}