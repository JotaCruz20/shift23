import React from "react";

import MainLayout from "../layouts/MainLayout";

import HomeScreen from "../pages/HomeScreen";
import LoginPage from "../pages/LoginPage";

interface IRoutes  {
    path: string;
    name: string;
    layout: React.ComponentType<any>;
    component: React.ComponentType<any>;
    protected: boolean;
}

const Routes: IRoutes[] = [
    {
        path: "/login",
        name: "welcome",
        layout: MainLayout, //TODO: Criar layout para a página de login
        component: LoginPage,
        protected: false
    },
    {
        path: "/",
        name: "welcome",
        layout: MainLayout,
        component: HomeScreen,
        protected: true
    }
]

export default Routes;