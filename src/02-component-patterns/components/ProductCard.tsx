import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useState } from 'react'
import { useProduct } from '../hooks/useProduct'

interface Props {
    product: Product

}

interface Product {
    id: string
    title: string
    img?: string
}

export const ProductImage = ({img = ''}) => {
    return (
        <img className={styles.productImg} src={img ? img : noImage} alt="product image" />
    )
}

export const ProductTitle = ({title}: {title: string}) => {
    return (
        <span className={styles.productDescription}>{title}</span>
    )
}

interface ProductButtonProps {
    increaseBy: (value: number) => void
    counter: number
}

export const ProductButtons = ({increaseBy, counter}: ProductButtonProps) => {
    
    return (
        <div className={styles.buttonsContainer}>
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}
                >-</button>

            <div className={styles.countLabel}> {counter} </div>

                <button
                    className={styles.buttonAdd}
                    onClick={() => increaseBy(1)}
                >+</button>
        </div>
    )
}

export default function ProductCard({product}: Props) {
    const { counter, increaseBy } = useProduct()
    
  return (
    <div className={ styles.productCard}>
        
        <ProductImage img={product.img}/>

        <ProductTitle title={product.title}/>

        <ProductButtons 
            increaseBy={increaseBy}
            counter={counter}
        />
      
    </div>
  )
}