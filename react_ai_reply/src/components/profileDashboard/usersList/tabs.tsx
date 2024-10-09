import React from 'react'
import { useSelectById } from '../../../customHooks/useSelectById'
import { Button } from '../../common/button'

export const Tabs = () => {
const {currentId, handleClick} =  useSelectById()

const classes = (id : string) => {
    return `${id === "focused" ? "border-r-[1px]" : ""}
    w-[50%] h-full flex justify-center items-center p-2 relative font-semibold
    ${id === currentId ?
    `text-[#01754f] before:absolute before:content-'' before:w-full before:h-[2px] before:bg-[#01754f] before:bottom-0 before:duration-300` : 
"text-black before:w-0"} `
}


const tabs = [
    {
        id : "focused",
        content : "Focused",
    },
    {
        id : "other",
        content : "Other",
    }
]

  return (
    <div className='w-full flex justify-center items-center border-b-[1px]'>
        {
            tabs.map(({id, content}) => {
                return(
                <Button key={id} content={content} handleClick={handleClick} id={id} classes={classes(id)} />
                )
            })
        }
    </div>
  )
}