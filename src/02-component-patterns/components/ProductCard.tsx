import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext


export function ProductCard({children, product}: ProductCardProps) {
    const { counter, increaseBy } = useProduct()
    
  return (
    <Provider value={{
        product,
        counter,
        increaseBy
    }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  );
}
