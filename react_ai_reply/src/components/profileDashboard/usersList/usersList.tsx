import React from 'react'
import { Header } from '../../common/header'
import { UseInput } from '../../../customHooks/useIuput';
import { Input } from '../../common/input';
import { Tabs } from './tabs';
import { Users } from './users';
import { Search } from '../../assets/svg/search';
import { ThreeDots } from '../../assets/svg/threeDots';
import { Edit } from '../../assets/svg/edit';
import { Buttons } from '../../common/buttons';


export const UsersList = () => {
    const {handleChange, data, setData} = UseInput()
    const inputs = [
        {
          type : "text",
          name : "search",
          placeHolder : "Search messages",
          icon : <Search color='#3c3d3e' width='20px' height='20px'/>,
          value : data.search
        }
      ]

    const buttons = [
      {
        id : "chatThreeDots",
        content : "",
        children : < ThreeDots width='20' height='20'/>,
        classes : "",
        handleClick : () => {}
      },
      {
        id : "chatEdit",
        content : "",
        children : <Edit width='15px' height='15px'/>,
        classes : "",
        handleClick : () => {}
      },
    ]
    
  return (
    <div className="w-[40%] h-full border-r-[1px]">
        <Header head="Messaging" p="py-4 px-3" border='border-b-[1px]'>
          <Buttons buttons={buttons}/>
        </Header>
        <div className='flex justify-center items-center'>
        <Input bg='bg-[rgb(237,243,248)]' inputs={inputs} width='w-[95%] mt-2' handleChange={handleChange}></Input>
        </div>
        <Tabs/>
        <Users/>
    </div>
  )
}
