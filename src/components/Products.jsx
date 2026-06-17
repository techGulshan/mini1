import { Link } from "react-router-dom";

function Products() {
  const products = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Milk" },
    { id: 3, name: "Rice" },
  ];

  return (
    <div>
      <h1>Products</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;