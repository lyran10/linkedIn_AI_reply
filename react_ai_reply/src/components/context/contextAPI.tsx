import { useContext, createContext,useState,memo } from "react";
import { ID } from "../../types/constants";

type APIContextType = {
id : string,
setId : React.Dispatch<React.SetStateAction<string>>,
AIGenMsg : string,
setAIGenMsg : React.Dispatch<React.SetStateAction<string>>,
popOver : boolean,
setPopOver : React.Dispatch<React.SetStateAction<boolean>>,
showStick : boolean,
setShowStick : React.Dispatch<React.SetStateAction<boolean>>
}

const APIContext = createContext<APIContextType | undefined>(undefined)

export const APIProvider : React.FC<{children : React.ReactNode}> = memo(({ children }) => {
    const [id, setId] = useState<string>(ID.MESSAGE_INPUT)
    const [AIGenMsg, setAIGenMsg] = useState<string>("")
    const [popOver, setPopOver] = useState<boolean>(false)
    const [showStick, setShowStick] = useState<boolean>(false)
   
    return (
        <APIContext.Provider value={{
            popOver,
            setPopOver,
            showStick,
            setShowStick,
            id,
            setId,
            AIGenMsg,
            setAIGenMsg,
        }}>{children}</APIContext.Provider>
    )
})


export const useAPIContext = () : APIContextType => {
    const context = useContext(APIContext)
    if(!context){
        throw new Error("context must be used within a provider")
    }
    return context
}