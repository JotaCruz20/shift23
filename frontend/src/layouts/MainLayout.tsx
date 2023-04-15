import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { useTranslation } from 'react-i18next'

import { getCookie } from '../util/cookies'

import { MainProps } from '../interfaces/IProps'

const MainLayout = ({ children, title }: MainProps) => {
    const { t } = useTranslation()
    
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
    return(
        <div className={`fixed h-full w-full select-none`}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default MainLayout