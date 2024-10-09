import React from 'react'
import { InputProps } from '../../types/types'



type Props = {
  inputs : InputProps[],
  width : string,
  handleChange : (e : React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLTextAreaElement>) => void,
  children? : React.ReactNode,
  bg : string
}

export const Input = ({inputs, width, handleChange, children, bg} : Props) => {
  return (
    <React.Fragment>
    {
      inputs.map(({type, name, placeHolder, value, icon}) => {
       return (
        <label key={name} className={`relative flex gap-2 py-2 ${width} px-6 justify-center items-center ${bg} rounded-md`}>
             {icon}
             <input onChange={handleChange} className='border-none outline-none bg-transparent w-full' type={type} name={name} id={type} value={value} placeholder={placeHolder}/>
             {children}
        </label>     
       )
      })
    }
    </React.Fragment>
  )
}
