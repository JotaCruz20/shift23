import React from "react"

import MainLayout from "../layouts/MainLayout"

import Playground from "../pages/Playground"
import SplashScreen from "../pages/SplashScreen"
import WelcomeScreen from "../pages/WelcomeScreen"
import Register from "../pages/Register"
import HomeScreen from "../pages/HomeScreen"
import WhiteLayout from "../layouts/WhiteLayout"
import Cart from "../pages/Cart"


interface IRoutes  {
    path: string
    layout: React.ComponentType<any>
    component: React.ComponentType<any>
    protected: boolean
}

const Routes: IRoutes[] = [
    {
        path: "/",
        layout: MainLayout, 
        component: SplashScreen,
        protected: false
    },
    {
        path: "/welcome",
        layout: MainLayout,
        component: WelcomeScreen,
        protected: false
    },
    {
        path: "/register",
        layout: MainLayout, 
        component: Register,
        protected: false
    },
    {
        path: "/playground",
        layout: MainLayout, 
        component: Playground,
        protected: false
    },
    {
        path: "/home",
        layout: WhiteLayout,
        component: HomeScreen,
        protected: false //TODO: MUDAR PARA TRUE
    },
    {
        path: "/cart",
        layout: MainLayout,
        component: Cart,
        protected: false //TODO: MUDAR PARA TRUE
    }
]

export default Routes