import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { getCookie } from '../util/cookies'


const Login = () => {

    const { t } = useTranslation()
    
    return(
        <h1 className='font-vidaloka'>{t(`login`)}</h1>
    )
}

export default Login