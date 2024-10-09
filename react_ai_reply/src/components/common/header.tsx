import React from 'react'

type Props = {
head : string,
subHead? : string,
p? : string
border? : string
children : React.ReactNode
}

export const Header = ({children, head, subHead, p, border} : Props) => {
  return (
    <div className={`flex justify-between items-center ${border} ${p}`}>
    <div>
    <header className='font-semibold'>{head}</header>
    <span className='text-[13px]'>{subHead}</span>
    </div>
    {children}
    </div>

  )
}
