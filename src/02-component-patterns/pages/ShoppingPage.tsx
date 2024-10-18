import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

export default function ShoppingPage() {
  return (
    <div className="">
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard 
        className={"bg-dark"} 
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({reset, maxCount, count, increaseBy}) => (
          <>
            <ProductImage className={"custom-image"} />
            <ProductTitle
              className={"text-white text-bold"}
              title={"Your are better"}
            />
            <ProductButtons className="custom-buttons text-white" />
            <button onClick={reset}>Reset</button>

            <button 
              disabled={ (count - 2 < 0)}
              onClick={() => !(count - 2 < 0) && increaseBy(-2)}
              >-2</button>

            <button 
              disabled={ (!!maxCount && count + 2 > maxCount)}
              onClick={() => (!!maxCount && count + 2 <= maxCount) && increaseBy(+2)}
              >+2</button>



          </>
        )}
      </ProductCard>
    </div>
  );
}
