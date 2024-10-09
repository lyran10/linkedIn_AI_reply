import React, { useState } from 'react'

export const useShowSTickOnFocus = () => {
  const [focus, setFocus] = useState<boolean>(false)

  return {focus, setFocus}
}
