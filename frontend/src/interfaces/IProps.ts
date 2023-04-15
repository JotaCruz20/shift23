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