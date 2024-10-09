import React from 'react'

type Props = {
    values : string[]
}

export const DisplayValue = ({ values } : Props) => {
  return (
   <>
     {
          values.length
          ?
          <div className='flex flex-col justify-center items-center gap-3 w-full'>
            {
            values.map((value, index) => {
              return(
                <span key={index} className={`${(index + 1) % 2 === 0 ? "self-start bg-blue-100" : "self-end text-end bg-gray-200"} rounded-md p-2 text-[14px] max-w-[80%] text-gray-500`}>{value}</span>
              )
            })
            }
          </div>
          :
          null
        }
   </>
  )
}
