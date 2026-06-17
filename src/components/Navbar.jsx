import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/categories">Categories</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;