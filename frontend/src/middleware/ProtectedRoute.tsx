import React from "react"
import { Navigate } from 'react-router-dom'
import { getCookie } from "../util/cookies"

import { api } from '../util/api'


export const ProtectedRoute = ({ children  }: any) => {
    
    const cookie = getCookie('accessToken')
    const data = api.get('auth/tokenUpToDate') // Vai testar se o token está válido

    if (!cookie || data===undefined) {
        return <Navigate to="/login" replace />
    }
    
    return children
}