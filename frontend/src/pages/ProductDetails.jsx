// src/pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); // get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load product.",err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const item = {
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    };

    const updatedCart = [...cartItems.filter(i => i._id !== item._id), item];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    alert("Added to cart!");
  };

  if (loading) return <div>Loading product...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover rounded"
        />

        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">Rs. {product.price}</p>

          {product.stock > 0 ? (
            <>
              <label className="block mb-2">Quantity:</label>
              <input
                type="number"
                value={quantity}
                min="1"
                max={product.stock}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border p-2 w-20 mb-4"
              />

              <button
                onClick={addToCart}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </>
          ) : (
            <p className="text-red-500 font-semibold">Out of stock</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
