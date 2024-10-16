import { useState } from "react";
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { onChangeArgs, Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

const product1 = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number
}

export default function ShoppingPage() {
  const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({})

  const onProductCountChange = ({count, product}: {count: number, product: Product}) => {


    setShoppingCart(prev => {
      
      if( count === 0 ) {
        const { [product.id]: toDelete, ...rest } = prev

        return {
          ...rest
        }
      }

      return {
        ...prev,
        [product.id]: {...product, count}
      }
    })
  }

  return (
    <div className="">
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            className={"bg-dark"}
            product={product}
            key={product.id}
            onChange={onProductCountChange}
          >
            <ProductImage className={"custom-image"} />
            <ProductTitle
              className={"text-white text-bold"}
              title={"Your are better"}
            />
            <ProductButtons className="custom-buttons text-white" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
      {Object.values(shoppingCart).length > 0 && Object.values(shoppingCart).map(product => (
          <ProductCard
            key={product.id}
            className={"bg-dark"}
            product={product}
            style={{
              width: "100px",
            }}
            onChange={onProductCountChange}
          >
            <ProductImage className={"custom-image"} />
            <ProductButtons 
              className="custom-buttons text-white" 
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}            
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
}
