// inputs props
export type InputProps = {
  type : string,
  name : string,
  placeHolder : string,
  icon : JSX.Element | null,
  value : string
}

export type InputData = {
  search : string,
  message : string,
  AIMessage: string
}

// nav Items 
export type NavItemsType =   {
  id : string,
  icon : JSX.Element | null,
  content : string,
  arrow : boolean,
  bubble : {
    icon : JSX.Element
  } | null
}

// button props

export type ButtonProps = {
  id : string
  content : string,
  children? : React.ReactNode,
  classes : string,
  handleClick : (e : React.MouseEvent<HTMLButtonElement>) => void,
  disabled? : boolean,
  }


// svg Props
  export type SVGProps = {
    width : string,
    height : string,
    color? : string
}

