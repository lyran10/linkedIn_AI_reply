import React from 'react'
import { SVGProps } from '../../../types/types'

export const DownArrow = ({color, width, height} : SVGProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height}>
    <path d="M128 192l128 128 128-128H128z" fill="currentColor"/>
    </svg>
  )
}
