import React from 'react';

const ProductCard = ({
  id,
  discount,
  name,
  price,
  originalPrice,
  sold,
  inStock,
  countdown,
  image,
}) => {
  const total = sold + inStock;
  const soldPercentage = (sold / total) * 100;

  const addToCart = () => {
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    // Convert price string to number (remove $ and convert)
    const numericPrice = parseFloat(price.replace('$', '').replace(',', ''));
    
    // Check if product already exists in cart
    const existingItemIndex = existingCart.findIndex(item => item.id === id);
    
    if (existingItemIndex > -1) {
      // Update quantity if item exists
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // Add new item to cart
      existingCart.push({
        id,
        name,
        price: numericPrice,
        image,
        quantity: 1
      });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    
    // Dispatch custom event to notify Navbar
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Show success message (optional)
    alert(`${name} added to cart!`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 w-full flex flex-col md:flex-row gap-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Discount Badge & Product Image */}
      <div className="relative flex-shrink-0 w-full md:w-[250px]">
        <span className="absolute top-2 left-2 bg-[#FF6B43] text-white text-xs font-medium px-2 py-1 rounded z-10">
          {discount}
        </span>
        {/* Product Image */}
        <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain p-4"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
            }}
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-3 flex-1 justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-normal text-gray-900 leading-5 line-clamp-2">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-900">{price}</span>
            <span className="text-sm text-gray-400 line-through">{originalPrice}</span>
          </div>

          {/* Stock Progress */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Sold: {sold}</span>
              <span>In Stock: {inStock}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#68D237] rounded-full transition-all"
                style={{ width: `${soldPercentage}%` }}
              />
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center justify-start gap-3 flex-wrap">
            <div className="flex flex-col items-center bg-gray-50 rounded px-3 py-1">
              <span className="text-base font-semibold text-gray-900">{countdown.days}</span>
              <span className="text-[10px] text-gray-500">Day</span>
            </div>
            <span className="text-sm text-gray-400">:</span>
            <div className="flex flex-col items-center bg-gray-50 rounded px-3 py-1">
              <span className="text-base font-semibold text-gray-900">{countdown.hours}</span>
              <span className="text-[10px] text-gray-500">Hour</span>
            </div>
            <span className="text-sm text-gray-400">:</span>
            <div className="flex flex-col items-center bg-gray-50 rounded px-3 py-1">
              <span className="text-base font-semibold text-gray-900">{countdown.mins}</span>
              <span className="text-[10px] text-gray-500">Min</span>
            </div>
            <span className="text-sm text-gray-400">:</span>
            <div className="flex flex-col items-center bg-gray-50 rounded px-3 py-1">
              <span className="text-base font-semibold text-gray-900">{countdown.secs}</span>
              <span className="text-[10px] text-gray-500">Sec</span>
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={addToCart}
          className="w-full h-10 bg-[#68D237] text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const PromoProduct = () => {
  const products = [
    {
      id: "macbook-air-2020",
      discount: "-15%",
      name: "Apple Macbook Air MWT2SA/A Space Grey (2020)",
      price: "$1,099",
      originalPrice: "$1,199.11",
      sold: 700,
      inStock: 300,
      countdown: { days: "123", hours: "42", mins: "00", secs: "08" },
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    },
    {
      id: "apple-watch-5",
      discount: "-15%",
      name: "Apple Watch Series 5 MWV62VN/A",
      price: "$514.51",
      originalPrice: "$556.06",
      sold: 700,
      inStock: 300,
      countdown: { days: "123", hours: "42", mins: "00", secs: "08" },
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1152px] mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Promo Product</h2>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-[#68D237] hover:underline">See All</a>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                ‹
              </button>
              <button className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoProduct;
