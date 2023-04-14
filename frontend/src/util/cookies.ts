import Cookies from 'universal-cookie'

import config from '../config/config'

const cookies = new Cookies()

export const setCookie = (key: string, token: string) => {
    cookies.set(key, token, { 
        secure: config.env === 'production',
        sameSite: 'strict' as const,
        path: '/',
    })
}

export const getCookie = (name: string): string | undefined =>{
    return cookies.get(name)
}
