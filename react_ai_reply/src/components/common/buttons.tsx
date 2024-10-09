import React from 'react'
import { Button } from './button'
import { ButtonProps } from '../../types/types'

type Props = {
    buttons : ButtonProps[],
    classes? : string
}

export const Buttons = ({buttons, classes} : Props) => {
  return (
    <div className={`flex justify-center items-center ${classes} gap-4 text-[rgba(0,0,0,.6)]`}>
    {
      buttons.map(({id, content, children, classes, handleClick}) => {
        return(
          <Button key={id} id={id} content={content} classes={classes} handleClick={handleClick}>
            {children}
          </Button>
        )
      })
    }
   </div>
  )
}
