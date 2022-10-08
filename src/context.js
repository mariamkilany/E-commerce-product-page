import React, { useState, useContext, useEffect } from 'react'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [index,setIndex]=useState(0)
    const [show,setShow] = useState(false)
    const [total,setTotal] = useState(0)
    const [number,setNumber] = useState(0)
    const [showCart,setShowCart] = useState(false)
    const [currentWindow,setCurrentWindow]=useState(window.innerWidth)
    const [showSideMenu,setShowSideMenu]=useState(false)
    const increase=()=>{
        setNumber(number+1)
    }
    const decrease=()=>{
        if(number>0)
        setNumber(number-1)
    }
    useEffect(()=>{
        const handleResize =()=>{
            setCurrentWindow(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize);
    })
    return(
        <AppContext.Provider value={{index,
        setIndex,
        show,
        setShow,
        total,
        setTotal,
        increase,
        decrease,
        number,
        setNumber,
        showCart,
        setShowCart,
        currentWindow,
        showSideMenu,
        setShowSideMenu}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider }