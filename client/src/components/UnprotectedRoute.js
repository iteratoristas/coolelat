import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuthContext} from '../context/AuthProvider';

export default function UnprotectedRoute({component: Component, ...rest}) {
    const isAuthenticated = useAuthContext().authenticated;
   
    console.log(isAuthenticated);
    return  !isAuthenticated ? (
            <Route {...rest} render={props => <Component {...rest} {...props}/>} />
        ) : (
            <Redirect to={{ pathname: '/' }} />
        );
}