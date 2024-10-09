import React,{useEffect} from 'react'
import { InputData } from '../types/types'

type Props = {
  setData : React.Dispatch<React.SetStateAction<InputData>>,
  AIMsg : string,
  data : InputData
}

export const useAIGenMsg = ({AIMsg, setData, data} : Props) => {

  useEffect(() => {
    setData({...data, message : AIMsg})
  }, [AIMsg])

  return 
}
