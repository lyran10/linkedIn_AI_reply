import React from 'react'
import { SVGProps } from '../../../types/types'

export const ThreeDots = ({color, width, height} : SVGProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
        <circle cx="6" cy="12" r="2" fill="currentColor"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <circle cx="18" cy="12" r="2" fill="currentColor"/>
    </svg>
  )
}
