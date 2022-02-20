import React, { createContext,useState } from 'react'


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [token,setToken] = useState("")
    const [isAuth,setIsAuth] = useState(false)
    
    const toggleAuth = () => { 
        
        setIsAuth(isAuth===false?true:false)
    }

    function Tokenfun(value) { 
        
        setToken(value)
    }

  return (
      <AuthContext.Provider value={{ isAuth, Tokenfun,token,toggleAuth }}>{children}</AuthContext.Provider>
    )
    
}
