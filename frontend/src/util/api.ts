import config from "../config/config"

import { getCookie, setCookie } from "./cookies"


interface IFetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: Record<string, unknown>
  }
  
async function fetcher(url: string, options: IFetchOptions = {}): Promise<any> {

    //const token = getCookie('accessToken')

    const requestOptions: RequestInit = {
        method: options.method || 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
            //...(token ? { Authorization: `Bearer ${token}` } : {})
        },
    }

    if (options.body) {
        requestOptions.body = JSON.stringify(options.body)
    }

    console.log(config)

    const response = await fetch(`${config.apiURL.api}${url}` , requestOptions)

    const data = await response.json()

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