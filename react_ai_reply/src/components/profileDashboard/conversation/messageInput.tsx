import React from 'react'
import { UseInput } from '../../../customHooks/useIuput'
import { Button } from '../../common/button';
import { useAPIContext } from '../../context/contextAPI';
import { useAIGenMsg } from '../../../customHooks/useAIGenMsg';
import { Smiley } from '../../assets/svg/smiley';
import { GIF } from '../../assets/svg/GIF';
import { Attachment } from '../../assets/svg/attachment';
import { Image } from '../../assets/svg/image';
import { ThreeDots } from '../../assets/svg/threeDots';
import { UpArrow } from '../../assets/svg/upArrow';
import { Buttons } from '../../common/buttons';
import { Form } from './form';

export const MessageInput = () => {
    const {AIGenMsg} = useAPIContext()
    const {data, setData, handleChange} = UseInput()
    useAIGenMsg({AIMsg : AIGenMsg, data, setData})
    const buttons = [
      {
        id : "inputImage",
        content : "",
        children : <Image width='20' height='20'/>,
        classes : "",
        handleClick : () => {}
      },
      {
        id : "inputAttach",
        content : "",
        children : <Attachment width='15' height='15'/>,
        classes : "",
        handleClick : () => {}
      },
      {
        id : "inputGIF",
        content : "",
        children : <GIF width='20' height='20'/>,
        classes : "",
        handleClick : () => {}
      },
      {
        id : "inputSmiley",
        content : "",
        children : <Smiley width='16' height='16'/>,
        classes : "",
        handleClick : () => {}
      },
      {
        id : "inputSend",
        content : "Send",
        children : <></>,
        classes : `${data.message ? "text-white bg-blue-600" : "text-[#a6a6a6] bg-[#e8e8e8]"}  px-3 py-1 text-[13px] rounded-full`,
        handleClick : () => {},
        disabled : data.message ? false : true
      },
      {
        id : "inputThreeDots",
        content : "",
        children : <ThreeDots width='20' height='20'/>,
        classes : "",
        handleClick : () => {}
      },
    ]

    return (
    <div className='w-full flex flex-col justify-center items-start h-[30%] p-2'>
        <div className='w-full h-[65%] border-b  flex justify-center items-start'>
        <Form data={data} handleChange={handleChange}/>
        <div className='w-[10%] flex justify-center items-center'>
        <Button id="inputUpArrow" content={""} handleClick={() => {}} classes={`text-[rgba(0,0,0,.6)]`}>
          <UpArrow width='13' height='13'/>
        </Button>
        </div>
        </div>

        <div className='w-full flex justify-between items-center h-[35%] text-[rgba(0,0,0,.6)]'>
          <Buttons buttons={buttons.slice(0,4)}/>
          <Buttons buttons={buttons.slice(4,buttons.length)}/>
        </div>
    </div>
  )
}
