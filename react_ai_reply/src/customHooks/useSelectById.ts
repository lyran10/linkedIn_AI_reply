import React, { useState } from 'react'

export const useSelectById = () => {
    const [currentId,setCurrentId] = useState<string>("")

    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        setCurrentId(e.currentTarget.id)
      }

  return {currentId, handleClick}
}
