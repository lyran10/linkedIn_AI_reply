import React from 'react'

type Props = {
    date : string
}

export const Date = ({date} : Props) => {
  return (
    <span className='absolute bottom-[93%] text-center p-2 bg-white shadow-sm rounded-full font-semibold'>{date}</span>
  )
}
