import internal from "stream"

export interface MainProps{
    children: React.ReactNode
    title: string
}

export interface IPopUpCardProps {
    children: React.ReactNode
}

export interface PropsButton{
    title: string
    onClick: () => void
    type: "button" | "submit" | "reset" | undefined
    disabled: boolean
}

export interface CardProps{
    title: string
    image: string
    price: number
    discount: number
    unit: string
}

export interface ProdInfoProps{
    title: string
    price: number
    weight: number 
    producerName: string
    producerImage: string
    productImage: string
    unit: string
}

export interface ProdTopProps{
    image: string
}
export interface ProdBottomProps{
    title: string
    unit: string
    price: number
    weight: number
    producerName: string
    producerImage: string
}

export interface ProdUnitProps{
    weight: number
    unit: string
    price: number
}

export interface ProducerInfoProps{
    name: string
    image: string
}