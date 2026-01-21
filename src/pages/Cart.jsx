import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import TopBar from "../components/header/TopBar";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <TopBar />
        <Navbar />
        <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
          <ShoppingBag size={80} className="text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <a
            href="/"
            className="flex items-center gap-2 bg-[#65d446] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </a>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
          </h1>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-1"
          >
            <Trash2 size={16} />
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 flex gap-4 md:gap-6"
              >
                {/* Product Image */}
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 line-clamp-2">
                        {item.name}
                      </h3>
                      {item.model && (
                        <p className="text-sm text-gray-500 mt-1">{item.model}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">
                        by{" "}
                        <span className="text-blue-500 font-medium">
                          {item.seller}
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition p-1"
                      title="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  {/* Price and Quantity */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1 bg-gray-100 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-200 rounded-l-lg transition"
                      >
                        <Minus size={16} className="text-gray-600" />
                      </button>
                      <span className="w-12 text-center font-medium text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-200 rounded-r-lg transition"
                      >
                        <Plus size={16} className="text-gray-600" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-lg md:text-xl font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} each
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-4">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-500 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#65d446] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition mb-4">
                Proceed to Checkout
              </button>

              <a
                href="/"
                className="block text-center text-gray-500 hover:text-gray-700 text-sm"
              >
                <ArrowLeft size={14} className="inline mr-1" />
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
