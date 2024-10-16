import { createContext, CSSProperties, ReactElement } from 'react'
import { useProduct } from '../hooks/useProduct'
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
}


export function ProductCard({children, product, className, style, onChange}: Props) {
    const { counter, increaseBy } = useProduct({onChange, product})
    
  return (
    <Provider value={{
        product,
        counter,
        increaseBy,

    }}>
      <div className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  );
}
