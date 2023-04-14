import config from "../config/config"

import { getCookie, setCookie } from "./cookies"


interface IFetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: Record<string, unknown>
  }
  
async function fetcher(url: string, options: IFetchOptions = {}): Promise<any> {

    const token = getCookie('accessToken')

    const requestOptions: RequestInit = {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
    }

    if (options.body) {
        requestOptions.body = JSON.stringify(options.body)
    }

    console.log(config)

    const response = await fetch(`${config.apiURL.api}/${url}` , requestOptions)

    const data = await response.json()

    //Caso a token tenha expirado, vamos obter uma nova token e tentar novamente o pedido, se o pedido de refresh falhar, vamos dar logout
    if(response.status === 403 && data["details"]==="Invalid/Expired Access Token. Permission Denied.") {
        const refreshToken = getCookie('refreshToken')

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({refreshToken: refreshToken})
        }



        const response = await fetch(`${config.apiURL.api}/${url}` , requestOptions)
        const data = await response.json()

        if(response.status === 200) {

            const accessToken = data["accessToken"]
            const refreshToken = data["refreshToken"]

            setCookie('accessToken', accessToken)
            setCookie('refreshToken', refreshToken)
            return fetcher(url, options)
        }
        else{
            return undefined
        }
    }

    if (!response.ok) {
        console.log(new Error(`HTTP error! status: ${response.status}`))
        return undefined
    }

    return data
}

const get = (url: string) => fetcher(url)
const post = (url: string, body: Record<string, unknown>) => fetcher(url, { method: 'POST', body })
const put = (url: string, body: Record<string, unknown>) => fetcher(url, { method: 'PUT', body })
const del = (url: string, body?: Record<string, unknown>) => body ? fetcher(url, {method: 'DELETE', body}) : fetcher(url, { method: 'DELETE' })

export const api = {
    get,
    post,
    put,
    del,
  }