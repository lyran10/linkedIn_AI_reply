import React from 'react'
import { useShowOrRemoveElement } from '../../customHooks/useShowOrRemoveElement'

type Props = {
    children : React.ReactNode
}

export const Popover = ({children} : Props) => {
    const {popOver, popoverRef} = useShowOrRemoveElement({})
  
  return (
    <section ref={popoverRef} id="popover" onClick={() => {}} className={`${popOver ? "flex" : "hidden"} justify-center items-center absolute w-full h-full z-[10] bg-[rgba(0,0,0,.6)] top-0`}>
        {children}
    </section>
  )
}
