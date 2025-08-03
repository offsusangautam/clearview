import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    isNew,
  } = product;

  return (
    <div className="border rounded-xl shadow-sm hover:shadow-md transition duration-200 p-4 bg-white">
      <Link to={`/product/${_id}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
          <Star className="w-4 h-4 text-yellow-500" />
          {rating} ({reviews} reviews)
        </div>
        <div className="mt-2">
          <span className="text-xl font-bold text-green-600">Rs. {price}</span>
          {originalPrice && (
            <span className="text-sm line-through text-gray-400 ml-2">
              Rs. {originalPrice}
            </span>
          )}
        </div>
        {isNew && (
          <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
            New
          </span>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;
