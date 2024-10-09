import React from 'react'
import { ButtonProps } from '../../types/types'

export const Button = ({id, content, children, classes, handleClick, disabled} : ButtonProps) => {
  return (
    <button key={id} disabled={disabled} id={id} onClick={handleClick} className={`${classes} font-semibold`}>
        {content}
        {children}
    </button>
  )
}
