import React from 'react'
import { SVGProps } from '../../../types/types'

export const InsertArrow = ({color, width, height} : SVGProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="currentColor">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2v16m0 0l-7-7m7 7l7-7"/>
  </svg>
  )
}
