import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'

import { getCookie } from '../util/cookies'

import { MainProps } from '../interfaces/IProps'

const WhiteLayout = ({ children, title }: MainProps) => {
    const { t } = useTranslation()
    
    return(
        <div className={`fixed h-full w-full bg-white select-none font-dmsans`}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default WhiteLayout