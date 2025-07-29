// src/pages/Checkout.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(stored);
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.address || !form.phone) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate order placement
    localStorage.removeItem("cartItems");
    alert("✅ Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🧾 Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Please add items first.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Shipping Info */}
          <form onSubmit={handleOrder} className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>

            {error && <p className="text-red-500">{error}</p>}

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Delivery Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p>Rs. {item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 flex justify-between font-semibold">
              <p>Total:</p>
              <p>Rs. {totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
