import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("loggedInUser"));
    });

    const signUp = ({email, password}) => {
        const userData = {email, password};
        localStorage.setItem("registeredUser", JSON.stringify(userData));
    }

    const login = ({email, password}) => {
        const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

        if(!savedUser){
            alert('No user found. Please sign up first');
            return false
        }

        if(savedUser.email === email && savedUser.password === password){
            setUser({email});
            localStorage.setItem('loggedInUser', JSON.stringify({email}));
            return true;
        }else {
            alert('Invalid email or password');
            return false;
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("loggedInUser");
    }

    return (
        <AuthContext.Provider value={{
            user, login, signUp, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;