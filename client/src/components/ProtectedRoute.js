import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuthContext} from '../context/AuthProvider';

export default function ProtectedRoute({component: Component, ...rest}) {
    const isAuthenticated = useAuthContext().authenticated;
   
    return  isAuthenticated ? (
            <Route {...rest} render={props => <Component {...rest} {...props}/>} />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
}