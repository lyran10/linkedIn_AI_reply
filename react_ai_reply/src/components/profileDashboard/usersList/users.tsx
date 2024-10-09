import React from 'react'
import pic from "../../assets/images/avatar.png" 
import { Avatar } from '../../common/avatar'

export const Users = () => {
const usersData = [
    {
      id : "1",
      name : "John Doe",
      msg : "Lorem Ipsum is simply dummy text...",
      date : "Dec 7 2023"
    },
    {
        id : "2",
        name : "Matthew Lewis",
        msg : "Lorem Ipsum is simply dummy text...",
        date : "Dec 7 2023"
      },
      {
        id : "3",
        name : "Ashley Clark",
        msg : "Lorem Ipsum is simply dummy text...",
        date : "Dec 7 2023"
      },
      {
        id : "4",
        name : "Chris Taylor",
        msg : "Lorem Ipsum is simply dummy text...",
        date : "Dec 7 2023"
      },
      {
        id : "5",
        name : "Jessica White",
        msg : "Lorem Ipsum is simply dummy text...",
        date : "Dec 7 2023"
      },
      {
        id : "6",
        name : "David Wilson",
        msg : "Lorem Ipsum is simply dummy text...",
        date : "Dec 7 2023"
      },
      {
        id : "7",
        name : "Sarah Davis",
        msg : "Lorem Ipsum is simply dummy text...",
        date : "Dec 7 2023"
      },
      {
        id : "8",
        name : "Michael Brown",
        msg : "Lorem Ipsum is simply dummy text...",
        date : "Dec 7 2023"
      },
      {
        id : "9",
        name : "Jane Smith",
        msg : "Lorem Ipsum is simply dummy text...",
        date : "Dec 7 2023"
      },
      {
        id : "10",
        name : "Emily Johnson",
      msg : "Lorem Ipsum is simply dummy text...",
        date : "Dec 7 2023"
      },
]
  return (
    <div className='w-full h-[74%] overflow-y-scroll'>
        {
          usersData.map(({id, name, msg, date}) => {
            return(
                <div key={name} className='w-full p-4 border-b-[1px] flex gap-1'>
                    <Avatar width='w-[20%]' height='h-[20%]'><img src={pic} alt="No image" /></Avatar>
                    <div className='w-[80%] text-[14px]'>
                    <div className=' w-full flex justify-between items-center font-semibold'>
                        <span>{name}</span>
                        <span>{date}</span>
                    </div>
                    <span className='text-[13px]'>{msg}</span>
                    </div>
                </div>
            )
          })
        }
    </div>
  )
}