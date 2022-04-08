import React from 'react'
import { Navigate } from 'react-router-dom';
import {isAuthenticate}  from '../utils/localstorage'
type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const {user} = isAuthenticate();
    if(!user?.role){
        return <Navigate to="/login" />
    }
  return props.children
}

export default PrivateRouter