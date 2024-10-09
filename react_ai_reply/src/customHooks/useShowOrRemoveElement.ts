import React, { useRef, useEffect } from 'react'
import { useAPIContext } from '../components/context/contextAPI'
import { ID } from '../types/constants'

type Props = {
   value? : boolean,
}

export const useShowOrRemoveElement = ({value} : Props) => {
const {id, popOver, showStick, setPopOver, setShowStick, setId}  = useAPIContext()
const stickRef = useRef<HTMLButtonElement | null>(null)
const inputRef = useRef<HTMLTextAreaElement | null>(null)
const popoverRef = useRef<HTMLTextAreaElement | null>(null)

const handleClick = (event: MouseEvent) => {
  if(id === ID.MESSAGE_INPUT){
    if (
      (stickRef.current && stickRef.current.contains(event.target as Node)) || 
      (inputRef.current && inputRef.current.contains(event.target as Node)) ||
      (popoverRef.current && popoverRef.current.contains(event.target as Node))
       ) setShowStick(true)
    else setShowStick(false)
    return
  }

  if(id === ID.POPOVER){
    if (popoverRef.current === event.target as Node){
        setPopOver(false)
        setShowStick(false)
        setId(ID.MESSAGE_INPUT)
       }
    return
  }
  
  };

  useEffect(() => {
      document.addEventListener('click',handleClick);
      return () => document.removeEventListener('click', handleClick);
  }, [value,id]);

  return {inputRef, stickRef, popoverRef, popOver, showStick}
}
