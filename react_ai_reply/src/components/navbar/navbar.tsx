import React from 'react'
import { Input } from '../common/input';
import { UseInput } from '../../customHooks/useIuput';
import { NavItems } from './navItems';
import { Search } from '../assets/svg/search';
import { LinkedIn } from '../assets/svg/linkedIn';

export const Navbar = () => {
  const {data, handleChange} = UseInput()

  const inputs = [
    {
      type : "text",
      name : "search",
      placeHolder : "Search",
      icon : <Search color='#3c3d3e' width='20px' height='20px'/>,
      value : data.search
    }
  ]

  return (
    <nav className='w-full h-[8vh] flex justify-around bg-[rgba(255,255,255,1)]'>
      <div className='flex justify-center items-center gap-2'>
          <LinkedIn width='40' height='40'/>
          <div className='hidden lg:block'>
            <Input bg='bg-[rgb(237,243,248)]' handleChange={handleChange} width='w-[300px]' inputs={inputs}/>
          </div>
      </div>
     <NavItems />
    </nav>
  )
}


