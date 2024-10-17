import { useEffect, useState } from "react"
import { onChangeArgs, Product } from "../interfaces/interfaces"

interface useProductsArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void
    value?: number
}

export function useProduct({product, onChange, value = 0}: useProductsArgs) {
    const [counter, setCounter] = useState(value)

    const increaseBy = (value: number) => {
        
        const newValue = Math.max(counter + value, 0)
        setCounter( newValue)

        if(onChange) {
            onChange({product, count: newValue})
        }
    }

    useEffect(() => {
        setCounter(value)
    }, [value])


    return {
        counter,
        increaseBy,
        value
    }
}