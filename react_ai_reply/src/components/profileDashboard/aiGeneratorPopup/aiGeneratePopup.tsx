import React from 'react'
import { Input } from '../../common/input'
import { UseInput } from '../../../customHooks/useIuput'
import { useAIGenerator } from '../../../customHooks/useAIGenerator';
import { useAPIContext } from '../../context/contextAPI';
import { ID } from '../../../types/constants';
import { SendMessage } from '../../assets/svg/sendMessage';
import { InsertArrow } from '../../assets/svg/insertArrow';
import { Buttons } from '../../common/buttons';
import { DisplayValue } from './displayValue';

export const AIGeneratePopup = () => {
    const {setAIGenMsg,setPopOver, setId, setShowStick} = useAPIContext()
    const {data, setData, handleChange} = UseInput()
    const {values, addValues, removeValues} = useAIGenerator({value : data.AIMessage, data, setData})
    const inputs = [
        {
          type : "text",
          name : "AIMessage",
          placeHolder : "Your Prompt",
          icon : <></>,
          value : data.AIMessage
        }
      ]

      const buttons = [
        {
          id : "insert",
          content : "",
          children : <>
          <InsertArrow width='15' height='15'/>
          <span>Insert</span>
          </>,
          classes : `${values.length ? "flex" : "hidden"} justify-center items-center gap-2 self-end rounded-md text-[#a6a6a6] border-[1px] border-[#a6a6a6] px-3 py-1`,
          handleClick : insertAiGenMsg
        },
        {
          id : "generate",
          content : "",
          children : <>
          <SendMessage width='20' height='20'/>
          <span>{values.length ? "Regenerate" : "Generate"}</span>
          </>,
          classes : `flex justify-center items-center gap-2 self-end rounded-md text-white bg-blue-500 px-3 py-1`,
          handleClick : addValues,
          disabled : values.length ? true : false
        },
      ]

  function insertAiGenMsg () {
    if(values.length){
      setAIGenMsg(values[values.length - 1])
      setPopOver(false)
      setId(ID.MESSAGE_INPUT)
      setShowStick(false)
      setData({...data, AIMessage : ""})
      removeValues()
    }

  }
    
return (
    <div className='bg-white shadow-md flex flex-col justify-center items-center gap-2 w-[500px] p-5 rounded-md'>
        <DisplayValue values={values}/>
        <Input bg='bg-white border' inputs={inputs} width='w-full' handleChange={handleChange}/>
        <Buttons buttons={buttons} classes='self-end'/>
    </div>
  )
}
