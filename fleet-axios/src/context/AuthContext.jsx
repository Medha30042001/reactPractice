import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [registeredUser, setRegisteredUser] = useState(null);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('registeredUser'));
        if(savedUser){
            setRegisteredUser(savedUser);
        }
    }, [])

    const signup = ({email, password}) => {
        const newUser = {email, password};
        localStorage.setItem('registeredUser', JSON.stringify(newUser));
        setRegisteredUser(newUser);
    }

    const login = ({email, password}) => {
        if(!registeredUser){
            alert('No user. Signup first');
            return false;
        }
        if(email === registeredUser.email 
            && password === registeredUser.password){
                setUser({email});
                return true;
            }
        alert('Invalid Credentials');
        return false;
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            user, signup, login, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;