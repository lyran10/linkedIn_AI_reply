import React, { useState } from 'react'
import { InputData } from '../types/types'

type Props = {
  value : string,
  data : InputData,
  setData : React.Dispatch<React.SetStateAction<InputData>>
}

export const useAIGenerator = ({value, data, setData} : Props) => {
  const [values, setValues] = useState<string[]>([])
  const AIGeneratedValue = `Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.`

  const addValues = () => {
    if(value){
      setValues([...values, value, AIGeneratedValue])
      setData({...data, AIMessage : ""})
    } 
  }

  const removeValues = () => { setValues([]) }

  return {values, addValues, removeValues}
}
