import React from "react"

import MainLayout from "../layouts/MainLayout"

import Playground from "../pages/Playground"
import SplashScreen from "../pages/SplashScreen"
import WelcomeScreen from "../pages/WelcomeScreen"
import Register from "../pages/Register"


interface IRoutes  {
    path: string
    name: string
    layout: React.ComponentType<any>
    component: React.ComponentType<any>
    protected: boolean
}

const Routes: IRoutes[] = [
    {
        path: "/",
        name: "welcome",
        layout: MainLayout, //TODO: Criar layout para a página de login
        component: SplashScreen,
        protected: false
    },
    {
        path: "/welcome",
        name: "welcome",
        layout: MainLayout, //TODO: Criar layout para a página de login
        component: WelcomeScreen,
        protected: false
    },
    {
        path: "/register",
        name: "register",
        layout: MainLayout, //TODO: Criar layout para a página de login
        component: Register,
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