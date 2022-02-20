import React from 'react'
import { auth, provider, db } from '../firebase'
export const AuthContext = React.createContext()

const AuthProvider = ({children}) =>{
    const [loading, setLoading] = React.useState(false)
    
    const value = {
        loading
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider