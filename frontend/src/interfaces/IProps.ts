import internal from "stream"
import { CartItem, CartState } from "./IContext"

export interface MainProps{
    children: React.ReactNode
    title: string
}

export interface IPopUpCardProps {
    children: React.ReactNode
}

export interface IPopUpCardWithImageProps {
    children: React.ReactNode
    image: string
    name: string
    city: string
}

export interface PropsButton{
    title: string
    onClick: () => void
    type: "button" | "submit" | "reset" | undefined
    disabled: boolean
}

export interface CardProps{
    id: number
    title: string
    image: string
    price: number
    unit: string
    name?: string
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
    image: string
    name: string
}
export interface ProducerPageProps{
    name: string
}

export interface ProdTypeListProp{
    list: any[]
}

export interface ProdGridProps{
    list: any[]
}
export interface ProdTypeButtonProps{
    name:string
}

export interface ISliderProps{
    items: any[]
}
export interface ICartProviderProps {
    children: React.ReactNode
}
export interface CartContextProps {
    state: CartState;
    addItem: (item: CartItem) => void
    removeItem: (itemId: string) => void
    updateQuantity: (itemId: string, quantity: number) => void
    items: CartItem[]
}

export interface VendorHistoryProps{
    saleHistory: any[]
}

export interface VendorHistoryCardProps{
    customer: string
    order_nr: number
    status: string
    products: any[]
    total: number
}

export interface HistorySliderCardProps{
    image: string
    weight: number
}
export interface VendorHistorySliderProps{
    products: any[]
}