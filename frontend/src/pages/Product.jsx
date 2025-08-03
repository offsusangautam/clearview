import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg p-4 shadow-md">
          <img
            src={product.image || "https://via.placeholder.com/150"}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-700">${product.price}</p>
          <p className="text-sm text-gray-500">{product.description}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">⭐ {product.rating || 0}</span>
            <span className="text-gray-400 text-sm">({product.reviews || 0} reviews)</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
