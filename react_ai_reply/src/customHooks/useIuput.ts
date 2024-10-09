import React,{ useState } from 'react'
import { InputData } from '../types/types'

export const UseInput = ()  => {
  const [data,setData] = useState({
      search : "",
      message : "",
      AIMessage : ""
  } as InputData)
  
const handleChange = (e : React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLTextAreaElement>) =>{
      setData({...data,[e.currentTarget.name] : e.currentTarget.value})
  }  
  
  return {data, handleChange, setData}
  }