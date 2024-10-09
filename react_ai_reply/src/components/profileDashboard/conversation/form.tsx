import React from 'react'
import { useShowSTickOnFocus } from '../../../customHooks/useShowTickOnFocus'
import { useShowOrRemoveElement } from '../../../customHooks/useShowOrRemoveElement'
import { InputData } from '../../../types/types'
import { AI_stick } from '../../assets/svg/Ai_stick'
import { useAPIContext } from '../../context/contextAPI'
import { ID } from '../../../types/constants'

type Props = {
    data : InputData,
    handleChange : (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
}


export const Form = ({data, handleChange} : Props) => {
    const {setPopOver, setId} = useAPIContext()
    const {focus, setFocus} = useShowSTickOnFocus()
    const {inputRef, stickRef, showStick} = useShowOrRemoveElement({value : focus})

    const sendMessage = (e : React.FormEvent) => {
        e.preventDefault()
    } 

    const showAIPopover = () => {
      setPopOver(true)
      setId(ID.POPOVER)
    }

  return (
    <form className='relative w-[90%] ' onSubmit={sendMessage}>
          <textarea ref={inputRef} id="message" onFocus={() => setFocus(true)}  onBlur={() => setFocus(false)} value={data.message} onChange={handleChange} placeholder='Write a message...' rows={3} className='py-2 ps-3 pe-10 w-full rounded-md outline-none bg-[rgb(244,242,238)]' name="message">
          </textarea>
           <button style={{display : "none"}} ref={stickRef} id="ai_stick" onClick={showAIPopover} className={`absolute bottom-0 right-0 ${showStick ? "z-[10]" : "z-[-1]"}`}>
            <AI_stick/>
          </button>
        </form>
  )
}
