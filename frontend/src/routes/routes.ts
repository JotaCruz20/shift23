import React from "react"

import MainLayout from "../layouts/MainLayout"

import Login from "../pages/Login"
import Playground from "../pages/Playground"

interface IRoutes  {
    path: string
    name: string
    layout: React.ComponentType<any>
    component: React.ComponentType<any>
    protected: boolean
}

const Routes: IRoutes[] = [
    {
        path: "/login",
        name: "welcome",
        layout: MainLayout, //TODO: Criar layout para a página de login
        component: Login,
        protected: false
    },
    {
        path: "/playground",
        name: "welcome",
        layout: MainLayout, //TODO: Criar layout para a página de login
        component: Playground,
        protected: false
    }
]

export default Routes