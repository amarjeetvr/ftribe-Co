import { useState } from "react";

const products = [
  {
    tag: "New",
    color: "bg-[#68D237]",
    name: "Apple Macbook Pro 2019",
    model: "MYP425AA",
    price: "$2,013.54",
    seller: "by Co., Ltd Minie Li",
    image: "/apple-2019.jpg",
  },
  {
    tag: "Favorite",
    color: "bg-yellow-400",
    name: "Apple Watch Series X",
    model: "MWVE2VN/A",
    price: "$617.28",
    seller: "by 347 Store",
    image: "/apple-watch.jpg",
  },
  {
    tag: "-15%",
    color: "bg-orange-400",
    name: "Apple Macbook Air",
    model: "MWVT25AA - Space Grey (2020)",
    price: "$1,099",
    originalPrice: "$1193.71",
    seller: "by Kimpine Calculator",
    image: "/apple-air.jpg",
  },
  {
    tag: "Sold Out",
    color: "bg-gray-400",
    name: "Hand Watch Rossini",
    model: "539ST01G",
    price: "$193.31",
    seller: "by Co., Ltd Minie Li",
    image: "/s-l1200.jpg",
    
  },
  {
    tag: "",
    color: "",
    name: "Apple Macbook Pro",
    model: "MVP425AA - Space Grey",
    price: "$1,646.34",
    seller: "by Co., Ltd Minie Li",
    image: "/air2.webp",
  },
  {
    tag: "",
    color: "",
    name: "Apple Macbook Pro 2020",
    model: "MVP425AA (Space Grey)",
    price: "$2142.98",
    seller: "by Co., Ltd Minie Li",
    image: "/ka.webp",
  },
];

export default function ProductList() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < products.length - 2) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <>
      {/* ================= DESKTOP PRODUCTS ================= */}
      <div className="hidden md:grid grid-cols-6 gap-6">
        {products.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="md:hidden overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300"
          style={{ transform: `translateX(-${index * 170}px)` }}
        >
          {products.map((item, i) => (
            <div key={i} className="min-w-[160px]">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ================= PRODUCT CARD ================= */

function ProductCard({ item }) {
  return (
    <div className="space-y-2">
      <div className="relative aspect-square bg-[#F5F5F5] rounded-lg flex items-center justify-center overflow-hidden">
        {item.tag && (
          <span
            className={`absolute top-2 left-2 font-work font-medium text-[12px] leading-[18px] tracking-[0%] px-2 py-0.5 rounded ${
              item.tag === "Favorite" || item.tag === "Sold Out" ? "text-black" : "text-white"
            } ${item.color}`}
          >
            {item.tag}
          </span>
        )}
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="text-gray-300 text-4xl font-light">1:1</span>
        )}
      </div>

      <div className="w-[172px] h-[114px] flex flex-col opacity-100">
        <p className="text-[13px] leading-[18px] text-gray-900 mb-1">
          {item.name}
        </p>
        <p className="text-[11px] leading-[16px] text-gray-500 mb-2">
          {item.model}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-[15px] leading-[20px] font-semibold text-gray-900">
            {item.price}
          </p>
          {item.originalPrice && (
            <p className="text-[11px] leading-[16px] text-gray-400 line-through">
              {item.originalPrice}
            </p>
          )}
        </div>
        {item.seller && (
          <p className="text-[11px] leading-[16px] mt-4">
            <span style={{ color: '#858585' }}>by </span>
            <span style={{ color: '#3581EA' }}>{item.seller.replace('by ', '')}</span>
          </p>
        )}
      </div>
    
    </div>
    
  );
}
