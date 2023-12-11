import { createContext,useContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from "../config/firebase";
const AuthContext = createContext()


// custom 

export const useAuth=()=>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children})=>{
        const [user,setUser] = useState(null)
        const [loading,setLoading] = useState(true)

    const registerUser =async({name,email,password})=>{
              const userCrendentials =   await createUserWithEmailAndPassword(auth,email,password)

              const userd = await userCrendentials.user;

              await updateProfile(userd,{
                displayName:name
              })
              setUser(userd)
    }

    const LogoutHandler =async()=>{
        await signOut(auth)
               
        setUser(null)
}

    useEffect(()=>{
                onAuthStateChanged(auth,(userd)=>{
                    if(userd){
                        setUser(userd)
                        setLoading(false)
                    }
                    else{
                        setUser(null)
                        setLoading(false)
                    }
                })
    },[])


    // login handler


    const loginUser =async({email,password})=>{
        const userCrendentials =   await signInWithEmailAndPassword(auth,email,password)

        
        setUser(userCrendentials.user)
}


const LoginWIthGoogleHandler = async()=>{
    const provider = new GoogleAuthProvider();
   const userCrendentilss=  await signInWithPopup(auth,provider);
   setUser(userCrendentilss.user)
}


    return <AuthContext.Provider value={{registerUser,user,loading,LogoutHandler,loginUser,LoginWIthGoogleHandler}} >
        {children}
    </AuthContext.Provider>
}