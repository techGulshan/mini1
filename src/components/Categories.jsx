function Categories() {
  const categories = [
    "Fruits",
    "Vegetables",
    "Dairy",
    "Snacks",
    "Beverages",
  ];

  return (
    <div>
      <h1>Categories</h1>

      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;