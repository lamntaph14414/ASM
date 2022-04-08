import React from 'react'
import { Navigate } from 'react-router-dom';
import {isAuthenticate}  from '../utils/localStorage'
type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const {user} = isAuthenticate();
    if(user.role){
        if(user.role !== 1){
            return <Navigate to="/" />
        }
        return props.children
    }else{
        return <Navigate to="/" />
    }
}

export default PrivateRouter