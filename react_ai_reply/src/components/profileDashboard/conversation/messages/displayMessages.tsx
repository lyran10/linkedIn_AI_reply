import React from 'react'
import { Date } from '../date'

type Props = {
   messages : {id : string, msg : string, date : string}[] 
}

export const DisplayMessages = ({messages} : Props) => {
  return (
    <ul className='flex flex-col justify-center items-center gap-2 pl-12 pr-3 text-[14px]'>
    {
    messages.map(({id, msg,date}) => {
      return(
        <React.Fragment key={id}>
         <li>{msg}</li>
         {/* can use some condition when date changes, for Example not to display date until it is different then the previous */}
         <Date date={date}/>
        </React.Fragment>
      )
    })
  }
    </ul>
  )
}
