import React, { useState } from 'react'

export const useShowNavbarInput = () => {
  const [showInput, setShowInput] = useState<boolean>(false)
  return {showInput, setShowInput}
}
