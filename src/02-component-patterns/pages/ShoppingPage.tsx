import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import '../styles/custom-styles.css'

const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

export default function ShoppingPage() {
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
        <ProductCard product={product}>
          <ProductCard.Image img={product.img} className={"custom-image"} />
          <ProductCard.Title title={product.title} className={"text-bold"} />
          <ProductCard.Buttons className="" />
        </ProductCard>

        <ProductCard className={"bg-dark"} product={product}>
          <ProductImage className={"custom-image"} />
          <ProductTitle
            className={"text-white text-bold"}
            title={"Your are better"}
          />
          <ProductButtons className="custom-buttons text-white" />
        </ProductCard>

        <ProductCard className={"bg-dark"} product={product} style={{
          backgroundColor: '#70D1F8'
        }}>
          <ProductImage />
          <ProductTitle style={{
            color: 'red',
          }}/>
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}
