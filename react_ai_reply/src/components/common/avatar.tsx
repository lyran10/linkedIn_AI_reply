import React from "react"

type Props = {
    bg? : string,
    position? : string,
    width : string,
    height : string,
    img? : string,
    shadow? : string,
    children : React.ReactNode
  }
  
  export const Avatar = ({bg, position,width,height,img, shadow, children} : Props) => {
    return (
      <div className={`flex justify-center items-center ${width} ${height} rounded-full ${bg} ${position} bottom-[80%] ${shadow}`}>
        {children}
      </div>
    )
  }