import { Heart, Eye, ShoppingCart, Check } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product, layout = "vertical" }) {
  const { addToCart, isInCart, getItemQuantity } = useCart();
  
  const inCart = isInCart(product.id);
  const quantity = getItemQuantity(product.id);
  const isOutOfStock = !product.inStock || product.badge === "Sold Out";

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!isOutOfStock) {
      addToCart(product);
    }
  };

  // Vertical layout (grid style)
  if (layout === "vertical") {
    return (
      <div className="flex flex-col group cursor-pointer">
        {/* Image Box */}
        <div className="relative aspect-square bg-[#F5F5F5] rounded-xl flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute z-10 top-3 left-3 px-3 py-1 text-[11px] font-bold rounded-md ${
                product.badgeTextColor || "text-white"
              } ${product.badgeColor || "bg-gray-500"}`}
            >
              {product.badge}
            </span>
          )}

          {/* Hover Actions */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
            <div className="flex justify-center gap-3">
              <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-transform hover:scale-105 shadow-md">
                <Heart size={18} className="text-gray-700 hover:text-red-500" />
              </button>
              <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-transform hover:scale-105 shadow-md">
                <Eye size={18} className="text-gray-700 hover:text-blue-500" />
              </button>
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              className={`w-full py-2.5 text-white text-[13px] font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 ${
                isOutOfStock
                  ? "bg-gray-400 cursor-not-allowed"
                  : inCart
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-[#65d446] hover:bg-green-600"
              }`}
            >
              {isOutOfStock ? (
                "Out of Stock"
              ) : inCart ? (
                <>
                  <Check size={16} />
                  In Cart ({quantity})
                </>
              ) : (
                <>
                  <ShoppingCart size={16} />
                  Add To Cart
                </>
              )}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h3 className="text-[15px] font-medium text-gray-800 mb-1 group-hover:text-green-500 transition-colors line-clamp-2">
            {product.name}
          </h3>
          {product.model && (
            <p className="text-[12px] text-gray-500 mb-2">{product.model}</p>
          )}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-black">
              ${product.price?.toFixed(2)}
              {product.priceLabel && (
                <span className="text-sm font-normal text-gray-500">
                  {product.priceLabel}
                </span>
              )}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.oldPrice?.toFixed(2)}
              </span>
            )}
          </div>
          <p className="text-[12px] text-gray-400">
            by{" "}
            <span className="text-blue-500 font-semibold hover:underline">
              {product.seller}
            </span>
          </p>
        </div>
      </div>
    );
  }

  // Horizontal layout (list style)
  return (
    <div className="flex gap-6 group">
      <div className="relative flex-shrink-0 w-[160px] h-[160px] rounded-2xl bg-[#F6F6F6] overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-[11px] font-bold rounded-md z-10 ${
              product.badgeTextColor || "text-white"
            } ${product.badgeColor || "bg-gray-500"}`}
          >
            {product.badge}
          </span>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
          <div className="flex justify-center gap-2">
            <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center transition-transform hover:scale-105 shadow-md">
              <Heart size={16} className="text-gray-700 hover:text-red-500" />
            </button>
            <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center transition-transform hover:scale-105 shadow-md">
              <Eye size={16} className="text-gray-700 hover:text-blue-500" />
            </button>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`w-full py-2 text-white text-[12px] font-bold rounded-lg shadow-lg transition-colors flex items-center justify-center gap-1 ${
              isOutOfStock
                ? "bg-gray-400 cursor-not-allowed"
                : inCart
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-[#65d446] hover:bg-green-600"
            }`}
          >
            {isOutOfStock ? (
              "Out of Stock"
            ) : inCart ? (
              <>
                <Check size={14} />
                In Cart
              </>
            ) : (
              <>
                <ShoppingCart size={14} />
                Add
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center py-1">
        <h3 className="text-[15px] font-bold text-black leading-tight group-hover:text-green-500 transition-colors cursor-pointer">
          {product.name}
        </h3>
        {product.model && (
          <p className="text-[13px] text-gray-500 mt-1 line-clamp-1">
            {product.model}
          </p>
        )}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-black">
            ${product.price?.toFixed(2)}
            {product.priceLabel && (
              <span className="text-sm font-normal text-gray-500">
                {product.priceLabel}
              </span>
            )}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.oldPrice?.toFixed(2)}
            </span>
          )}
        </div>
        <p className="text-[12px] text-gray-400 mt-2">
          by{" "}
          <span className="text-blue-500 font-bold hover:underline cursor-pointer">
            {product.seller}
          </span>
        </p>
      </div>
    </div>
  );
}
