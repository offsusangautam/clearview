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

  if (loading) return <div className="text-center py-10 text-lg">Loading product...</div>;
  if (error) return <div className="text-center py-10 text-red-600 font-semibold">{error}</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-sm"
        />

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
            <p className="text-2xl font-semibold mb-6">Rs. {product.price}</p>
          </div>

          {product.stock > 0 ? (
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <label htmlFor="quantity" className="text-lg font-medium">
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                value={quantity}
                min="1"
                max={product.stock}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-300 rounded-md p-2 w-24 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={addToCart}
                className="mt-3 sm:mt-0 bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <p className="text-red-600 font-semibold text-xl mt-6">Out of stock</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
