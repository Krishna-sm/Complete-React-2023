import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({children})=>{

    const [value,setValue] = useState(0)

    const increment=()=>setValue(value+1)
    const decrement=()=>setValue(value-1)

   return <CounterContext.Provider value={{value,increment,decrement}} > 
    {children}
   </CounterContext.Provider> 
}