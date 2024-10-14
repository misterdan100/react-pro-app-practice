import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

export default function ShoppingPage() {
  return (
    <div>
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
          <ProductCard.Image img={product.img} />
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={"Your are better"} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}
