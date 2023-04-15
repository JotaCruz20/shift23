import React from 'react'

import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const { t } = useTranslation()
    return(
        <div className='flex justify-center h-[70px] w-screen mt-4'>
            <div className='flex bg-green1 items-center align-middle rounded-full w-[80%]'>
                <h1 className='ml-4 font-vidaloka text-beige text-[35px]'>{t('title.app_name')}</h1>
                <div>
                    <h2 className='ml-4 font-vidaloka text-beige text-[35px]'>{t('title.buy')}</h2>
                    <h2 className='ml-4 font-vidaloka text-beige text-[35px]'>{t('title.about')}</h2>
                    <h2 className='ml-4 font-vidaloka text-beige text-[35px]'>{t('title.contact')}</h2>
                </div>
            </div>
        </div>
    )
}

export default Navbar