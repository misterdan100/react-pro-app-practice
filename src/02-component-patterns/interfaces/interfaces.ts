import { Props as ProductCardProps } from "../components/ProductCard"
import { ProductButtonsProps } from "../components/ProductButtons"
import { ProductTitleProps } from "../components/ProductTitle"
import { ProductImageProps } from "../components/ProductImage"

export interface Product {
    id: string
    title: string
    img?: string
}

export interface ProductContextProps {
    product: Product,
    counter: number,
    increaseBy: (value: number) => void,
    maxCount?: number
}

export interface ProductCardHOCProps {
    ({children, product}: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product,
    count: number
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count?: number,
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number
    isMaxCountReached: boolean
    maxCount?: number
    product: Product
    increaseBy: (value: number) => void
    reset: () => void
}