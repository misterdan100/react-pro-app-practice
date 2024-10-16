import { useState } from "react"
import { onChangeArgs, Product } from "../interfaces/interfaces"

interface useProductsArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void
}

export function useProduct({product, onChange}: useProductsArgs) {
    const [counter, setCounter] = useState(0)

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        setCounter( newValue)

        if(onChange) {
            onChange({product, count: newValue})
        }
    }


    return {
        counter,
        increaseBy,
    }
}