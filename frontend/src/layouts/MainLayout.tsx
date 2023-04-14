import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { useTranslation } from 'react-i18next'
import Sidebar from '../components/SideBar/SideBar'
import SidebarClosed from '../components/SideBar/SideBarClosed'

import { getCookie } from '../util/cookies'

import { MainProps } from '../interfaces/IProps'

const MainLayout: React.FC<MainProps> = ({ children, title }) => {
    const { t } = useTranslation()
    
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    if(isSmallScreen && sidebarIsOpen){
        setSidebarIsOpen(false)
    }

    const side = getCookie("toolbar")!

    const styleTitle = `text-white font-montserrat font-medium text-2xl ${side === "right" ? "m-auto px-[1%] pt-[0.2%]" : sidebarIsOpen ? "pt-[0.2%] px-[17%]" : "pt-[0.2%] px-[5%]"} }`
    const styleDiv = `fixed top-10 bottom-5 bg-background rounded-xl ${sidebarIsOpen ? "w-[82.35%]" : "left-0 right-0"} ${side === "right" ? "left-0 ml-[1%] mr-[5%]" : "right-0 mr-[1%] ml-[5%]"}`

    return(
        <div className={`fixed h-full w-full bg-frameColor select-none`}>
            <h1 className={styleTitle}>{t(`titles.${title}`)}</h1>
            {sidebarIsOpen  && <Sidebar setIsOpen={setSidebarIsOpen} side={side} />}
            {!sidebarIsOpen && <SidebarClosed setIsOpen={setSidebarIsOpen} side={side} />}
            <div className={styleDiv}>
                {children}
            </div>
        </div>
    )
}

export default MainLayout