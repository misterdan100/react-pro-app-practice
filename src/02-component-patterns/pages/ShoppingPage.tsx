import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";



export default function ShoppingPage() {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

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
            value={shoppingCart[product.id]?.count ? shoppingCart[product.id].count : 0}
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
            value={product.count}
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
