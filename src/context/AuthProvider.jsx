import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const authContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    
    }

    const userLogin= (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        setLoading(true)
        signOut(auth)
    }

   useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
       })
       return ()=>{
        unSubscribe()
       }
   },[])


const authinfo = {
    user,
    createUser,
    userLogin,
    logOut,
    loading
}

    return (
        <authContext.Provider value={authinfo}>
        {children}
        </authContext.Provider>
    );
};

export default AuthProvider;