import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const products = [
    { id: "1", name: "Apple", price: 120 },
    { id: "2", name: "Milk", price: 60 },
    { id: "3", name: "Rice", price: 80 },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;