import React, { createContext, useEffect, useReducer } from 'react'
import { token } from '../../utills/Config';

const initialValues = {
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
    user : localStorage.getItem('user')!==null ? JSON.parse(localStorage.getItem('user')) : null
}

export const userContext = createContext(initialValues);

const reducer = (state,action)=>{
    // console.log(action);
    switch (action.type) {
        case "LOGIN_SUCCESSFUL":
            return{
                role: action.payload.role,
                token: action.payload.token,
                user: action.payload.data
            }
        case "LOGOUT":
            return{
                role: null,
                token: null,
                user: null
            }
        default:
            return state;
    }
}

export default function Context({children}) {
    const [state,dispatch] = useReducer(reducer,initialValues);

    useEffect(() => {
        localStorage.setItem('role',state.role);
        localStorage.setItem('token',state.token);
        localStorage.setItem('user',JSON.stringify(state.user));
    },[state])

    return (
        // also sending dispatch data so that the reducer methods can be used using dispatch
        <userContext.Provider value={{user:state.user,dispatch,role:state.role}}>
            {children}
        </userContext.Provider>
    )
}
