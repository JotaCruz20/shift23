import internal from "stream"

export interface MainProps{
    children: React.ReactNode
    title: string
}
export interface CardProps{
    title: string
    image: string
    price: number
    discount: number
    unit: string
}