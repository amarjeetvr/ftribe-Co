import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";

function HeartIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_845_1628)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.304 4.75C5.65217 4.75 3.75 7.27613 3.75 9.755C3.75 12.3451 5.37381 14.7196 7.33666 16.4969C8.30654 17.3752 9.32777 18.0778 10.2037 18.557C10.6417 18.7967 11.0341 18.9754 11.3577 19.0924C11.6963 19.2147 11.9071 19.25 12 19.25C12.0929 19.25 12.3037 19.2147 12.6423 19.0924C12.9659 18.9754 13.3583 18.7967 13.7963 18.557C14.6722 18.0778 15.6935 17.3752 16.6633 16.4969C18.6262 14.7196 20.25 12.3451 20.25 9.755C20.25 7.27613 18.3478 4.75 15.696 4.75C14.1617 4.75 13.162 5.5059 12.5701 6.19834C12.4276 6.36502 12.2193 6.461 12 6.461C11.7807 6.461 11.5724 6.36502 11.4299 6.19834C10.838 5.5059 9.83832 4.75 8.304 4.75ZM2.25 9.755C2.25 6.68387 4.60583 3.25 8.304 3.25C9.96317 3.25 11.1765 3.91071 12 4.64228C12.8235 3.91071 14.0368 3.25 15.696 3.25C19.3942 3.25 21.75 6.68387 21.75 9.755C21.75 12.9659 19.7628 15.7139 17.6702 17.6088C16.6123 18.5667 15.4946 19.3377 14.5163 19.8729C14.0273 20.1405 13.5638 20.3543 13.1521 20.5031C12.7554 20.6464 12.3516 20.75 12 20.75C11.6484 20.75 11.2446 20.6464 10.8479 20.5031C10.4362 20.3543 9.97273 20.1405 9.48365 19.8729C8.50535 19.3377 7.38771 18.5667 6.32984 17.6088C4.23719 15.7139 2.25 12.9659 2.25 9.755Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_845_1628">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CartIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.29133 6.52781C5.43374 6.35208 5.64784 6.25 5.87403 6.25H18.5C19.6393 6.25 20.4739 7.31984 20.1976 8.4249L18.8496 13.8169C18.5679 14.9425 17.6109 15.7707 16.4557 15.8863C16.4557 15.8863 16.4557 15.8863 16.4557 15.8863L9.6397 16.5683C8.24376 16.707 6.9657 15.7742 6.67531 14.4014C6.67529 14.4013 6.67533 14.4015 6.67531 14.4014L5.14031 7.15543C5.09344 6.93416 5.14893 6.70354 5.29133 6.52781ZM6.79955 7.75L8.14275 14.0906C8.27445 14.7135 8.85459 15.1387 9.49036 15.0757L16.3064 14.3937C16.8311 14.3413 17.2661 13.9654 17.3944 13.4531C17.3944 13.4532 17.3944 13.453 17.3944 13.4531L18.7424 8.0611C18.7822 7.90216 18.6628 7.75 18.5 7.75H6.79955Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 4C2.75 3.58579 3.08579 3.25 3.5 3.25H5.224C5.57701 3.25 5.88224 3.49618 5.95699 3.84118L6.60699 6.84118C6.6947 7.24601 6.43764 7.64528 6.03282 7.73299C5.62799 7.8207 5.22872 7.56364 5.14101 7.15882L4.6191 4.75H3.5C3.08579 4.75 2.75 4.41421 2.75 4Z"
        fill="currentColor"
      />
      <path
        d="M8.69727 18.517C9.31437 18.5171 9.81445 19.0171 9.81445 19.6342C9.81435 20.2502 9.31429 20.7503 8.69824 20.7504C8.0873 20.7504 7.58101 20.2554 7.58301 19.6332C7.58088 19.0132 8.08494 18.517 8.69727 18.517ZM17.1143 18.517C17.7314 18.5171 18.2314 19.017 18.2314 19.6342C18.2313 20.2503 17.7313 20.7503 17.1152 20.7504C16.5043 20.7504 15.998 20.2554 16 19.6332C15.9979 19.0132 16.5019 18.517 17.1143 18.517Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar() {
  const { cartItems, removeFromCart, updateQuantity, getCartCount, getCartTotal } = useCart();
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories } = useSearch();
  
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showNewProductDropdown, setShowNewProductDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [localCategory, setLocalCategory] = useState(selectedCategory);

  const cartCount = getCartCount();

  const handleSearch = (e) => {
    e?.preventDefault();
    setSearchQuery(localSearchQuery);
    setSelectedCategory(localCategory);
    if (localSearchQuery || localCategory !== 'all') {
      window.location.href = '/search';
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowCategoryDropdown(false);
    window.location.href = '/search';
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-black text-white">
        <div className="container mx-auto px-4 md:px-28 py-4 md:py-6">
          <div className="flex items-center justify-between gap-4">
            {/* Left - Menu Icon (Mobile) and Logo */}
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Center - Search Bar (Desktop) */}
            <div className="hidden md:flex flex-1 max-w-4xl mx-8 items-center gap-4">
              <form onSubmit={handleSearch} className="flex w-full">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={localSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3.5 text-black text-sm focus:outline-none rounded-l-lg "
                />
                <select 
                  value={localCategory}
                  onChange={(e) => setLocalCategory(e.target.value)}
                  className="appearance-none px-6 py-2 pr-24 rounded-r-lg text-sm text-[#555555] font-md border-gray-300 focus:outline-none bg-[#F5F5F5] bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23555555%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[position:right_0.5rem_center] bg-no-repeat"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
                <div className="px-2">
                  <button 
                    type="submit"
                    className="bg-[#68D237] hover:bg-green-600 px-6 py-3.5 text-white text-sm font-medium rounded-lg transition"
                  >
                    Search
                  </button>
                </div>
              </form>
              {/* Desktop icons beside search */}
              <div className="flex items-center gap-4 md:gap-8 px-4">
                <button className="relative">
                  <HeartIcon className="w-6 h-6" />
                </button>
                <a href="/cart" className="relative">
                  <div className="relative mt-1">
                    <CartIcon className="w-6 h-6" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                        {cartCount}
                      </span>
                    )}
                  </div>
                </a>
              </div>
            </div>

            {/* Right - Icons (mobile only) */}
            <div className="flex md:hidden items-center gap-4">
              <button 
                className="md:hidden"
                onClick={() => setShowMobileSearch(!showMobileSearch)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="relative">
                <HeartIcon className="w-5 h-5" />
              </button>
              <a href="/cart" className="relative">
                <div className="relative mt-1">
                  <CartIcon className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </div>
              </a>

            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar (Desktop) */}
      <div className="hidden lg:block bg-white ">
        <div className="container mx-auto text-sm">
          <div className="flex items-center justify-around py-3">
            {/* Left - Category Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setShowCategoryDropdown(true)}
              onMouseLeave={() => setShowCategoryDropdown(false)}
            >
              <button 
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.24872 6.4368C8.24872 6.02258 8.5845 5.6868 8.99872 5.6868H20.0033C20.4175 5.6868 20.7533 6.02258 20.7533 6.4368C20.7533 6.85101 20.4175 7.1868 20.0033 7.1868H8.99872C8.5845 7.1868 8.24872 6.85101 8.24872 6.4368Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.24872 12.0001C8.24872 11.5859 8.5845 11.2501 8.99872 11.2501H20.0033C20.4175 11.2501 20.7533 11.5859 20.7533 12.0001C20.7533 12.4143 20.4175 12.7501 20.0033 12.7501H8.99872C8.5845 12.7501 8.24872 12.4143 8.24872 12.0001Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.24872 17.5634C8.24872 17.1492 8.5845 16.8134 8.99872 16.8134H20.0033C20.4175 16.8134 20.7533 17.1492 20.7533 17.5634C20.7533 17.9776 20.4175 18.3134 20.0033 18.3134H8.99872C8.5845 18.3134 8.24872 17.9776 8.24872 17.5634Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.24664 6.43679C3.24664 5.74632 3.80638 5.18658 4.49685 5.18658C5.18732 5.18658 5.74706 5.74632 5.74706 6.43679C5.74706 7.12726 5.18732 7.687 4.49685 7.687C3.80638 7.687 3.24664 7.12726 3.24664 6.43679Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.24664 12.0001C3.24664 11.3096 3.80638 10.7499 4.49685 10.7499C5.18732 10.7499 5.74706 11.3096 5.74706 12.0001C5.74706 12.6906 5.18732 13.2503 4.49685 13.2503C3.80638 13.2503 3.24664 12.6906 3.24664 12.0001Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.24664 17.5634C3.24664 16.873 3.80638 16.3132 4.49685 16.3132C5.18732 16.3132 5.74706 16.873 5.74706 17.5634C5.74706 18.2539 5.18732 18.8136 4.49685 18.8136C3.80638 18.8136 3.24664 18.2539 3.24664 17.5634Z"
                    fill="black"
                  />
                </svg>
                <span className="font-medium pr-9">Category</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showCategoryDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {categories.filter(cat => cat.id !== 'all').map((cat) => (
                      <button 
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)} 
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Center - Navigation Links */}
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="font-medium hover:text-green-500 transition"
              >
                Home
              </a>
              <div 
                className="relative"
                onMouseEnter={() => setShowNewProductDropdown(true)}
                onMouseLeave={() => setShowNewProductDropdown(false)}
              >
                <button 
                  className="flex items-center gap-1 font-medium hover:text-green-500 transition"
                >
                  New Product
                  <div className="pl-3">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* New Product Dropdown */}
                {showNewProductDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition border-b border-gray-100">
                        <div className="font-medium text-sm text-gray-900">Apple iPhone 15 Pro Max</div>
                        <div className="text-xs text-gray-500 mt-1">Latest flagship smartphone</div>
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition border-b border-gray-100">
                        <div className="font-medium text-sm text-gray-900">Samsung Galaxy Watch 6</div>
                        <div className="text-xs text-gray-500 mt-1">Advanced fitness tracking</div>
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition border-b border-gray-100">
                        <div className="font-medium text-sm text-gray-900">Sony WH-1000XM5</div>
                        <div className="text-xs text-gray-500 mt-1">Noise-cancelling headphones</div>
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition border-b border-gray-100">
                        <div className="font-medium text-sm text-gray-900">MacBook Pro M3</div>
                        <div className="text-xs text-gray-500 mt-1">High-performance laptop</div>
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition">
                        <div className="font-medium text-sm text-green-600">View All New Products →</div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <a
                  href="#"
                  className="font-medium hover:text-green-500 transition pr-2"
                >
                  Promotion
                </a>
                <span className="-top-2 -right-8 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full ">
                  HOT
                </span>
              </div>
            </div>

            {/* Right - Track Order & Sign In */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 hover:text-green-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 3.25C14.4641 3.25 14.9091 3.43451 15.2373 3.7627C15.5655 4.09088 15.75 4.53587 15.75 5V6.25H19.3232C20.0381 6.2501 20.6822 6.68564 20.9473 7.35156L22.5537 11.3652C22.6824 11.6882 22.75 12.0345 22.75 12.3848V18.333C22.75 18.7971 22.5655 19.2421 22.2373 19.5703C21.9091 19.8985 21.4641 20.083 21 20.083H19.8203C19.7975 20.1596 19.7709 20.2355 19.7402 20.3096C19.6229 20.5926 19.451 20.8498 19.2344 21.0664C19.0177 21.283 18.7606 21.455 18.4775 21.5723C18.1944 21.6896 17.8905 21.75 17.584 21.75C17.2775 21.75 16.9736 21.6896 16.6904 21.5723C16.4074 21.455 16.1502 21.283 15.9336 21.0664C15.717 20.8498 15.545 20.5926 15.4277 20.3096C15.4088 20.2639 15.3939 20.2165 15.3779 20.1699H8.79004C8.77429 20.216 8.75986 20.2625 8.74121 20.3076C8.62408 20.5907 8.45191 20.8487 8.23535 21.0654C8.01885 21.282 7.76142 21.454 7.47852 21.5713C7.19558 21.6886 6.89222 21.7489 6.58594 21.749C6.27969 21.7491 5.97636 21.6893 5.69336 21.5723C5.41023 21.4551 5.1523 21.283 4.93555 21.0664C4.68003 20.811 4.49202 20.5017 4.37793 20.166H3C2.53587 20.166 2.09088 19.9815 1.7627 19.6533C1.43451 19.3251 1.25 18.8801 1.25 18.416V13C1.25 12.5858 1.58579 12.25 2 12.25C2.41421 12.25 2.75 12.5858 2.75 13V14.25H14.25V5C14.25 4.9337 14.2236 4.87013 14.1768 4.82324C14.1299 4.77636 14.0663 4.75 14 4.75H10C9.58579 4.75 9.25 4.41421 9.25 4C9.25 3.58579 9.58579 3.25 10 3.25H14ZM17.584 18.582C17.4745 18.582 17.3658 18.6036 17.2646 18.6455C17.1635 18.6874 17.0715 18.7488 16.9941 18.8262C16.9167 18.9036 16.8554 18.9956 16.8135 19.0967C16.7716 19.1979 16.75 19.3065 16.75 19.416C16.75 19.5255 16.7716 19.6342 16.8135 19.7354C16.8554 19.8365 16.9167 19.9285 16.9941 20.0059C17.0715 20.0833 17.1635 20.1446 17.2646 20.1865C17.3658 20.2284 17.4745 20.25 17.584 20.25C17.6935 20.25 17.8021 20.2284 17.9033 20.1865C18.0044 20.1446 18.0964 20.0833 18.1738 20.0059C18.2512 19.9285 18.3126 19.8365 18.3545 19.7354C18.3964 19.6342 18.418 19.5255 18.418 19.416C18.418 19.3065 18.3964 19.1979 18.3545 19.0967C18.3126 18.9956 18.2512 18.9036 18.1738 18.8262C18.0964 18.7488 18.0044 18.6874 17.9033 18.6455C17.8021 18.6036 17.6935 18.582 17.584 18.582ZM6.58496 18.583C6.36398 18.5831 6.15131 18.6708 5.99512 18.8271C5.83918 18.9834 5.75194 19.1953 5.75195 19.416C5.75205 19.637 5.83977 19.8497 5.99609 20.0059C6.07344 20.0831 6.1656 20.1438 6.2666 20.1855C6.36758 20.2273 6.47569 20.249 6.58496 20.249C6.69438 20.249 6.80323 20.2275 6.9043 20.1855C7.00533 20.1436 7.09749 20.0823 7.1748 20.0049C7.25204 19.9275 7.3127 19.8354 7.35449 19.7344C7.39627 19.6334 7.41796 19.5253 7.41797 19.416C7.41792 19.3066 7.39641 19.1978 7.35449 19.0967C7.31258 18.9957 7.2512 18.9035 7.17383 18.8262C7.0176 18.6702 6.80572 18.583 6.58496 18.583ZM15.75 15C15.75 15.4142 15.4142 15.75 15 15.75H2.75V18.416C2.75 18.4823 2.77636 18.5459 2.82324 18.5928C2.87013 18.6397 2.9337 18.666 3 18.666H4.37793C4.49183 18.3308 4.67964 18.0218 4.93457 17.7666C5.37192 17.329 5.96527 17.0833 6.58398 17.083C7.20238 17.0827 7.79573 17.3278 8.2334 17.7646L8.23438 17.7656C8.45102 17.9821 8.6229 18.2395 8.74023 18.5225C8.76027 18.5708 8.77627 18.6205 8.79297 18.6699H15.375C15.3917 18.6206 15.4078 18.5707 15.4277 18.5225C15.545 18.2394 15.717 17.9823 15.9336 17.7656C16.1502 17.549 16.4074 17.3771 16.6904 17.2598C16.9736 17.1425 17.2775 17.082 17.584 17.082C17.8905 17.082 18.1944 17.1425 18.4775 17.2598C18.7606 17.377 19.0177 17.549 19.2344 17.7656C19.451 17.9823 19.6229 18.2394 19.7402 18.5225C19.7484 18.5421 19.7541 18.5631 19.7617 18.583H21C21.0663 18.583 21.1299 18.5566 21.1768 18.5098C21.2236 18.4629 21.25 18.3993 21.25 18.333V14.75H18C17.5858 14.75 17.25 14.4142 17.25 14V10C17.25 9.58579 17.5858 9.25 18 9.25H20.0918L19.5547 7.90723L19.5537 7.90625C19.5166 7.81284 19.4259 7.7501 19.3232 7.75H15.75V15ZM18.75 13.25H21.25V12.3848C21.25 12.2274 21.2193 12.0696 21.1602 11.9209L20.6914 10.75H18.75V13.25ZM3 9.25C3.41421 9.25 3.75 9.58579 3.75 10C3.75 10.4142 3.41421 10.75 3 10.75H2C1.58579 10.75 1.25 10.4142 1.25 10C1.25 9.58579 1.58579 9.25 2 9.25H3ZM5 6.25C5.41421 6.25 5.75 6.58579 5.75 7C5.75 7.41421 5.41421 7.75 5 7.75H2C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H5ZM7 3.25C7.41421 3.25 7.75 3.58579 7.75 4C7.75 4.41421 7.41421 4.75 7 4.75H2C1.58579 4.75 1.25 4.41421 1.25 4C1.25 3.58579 1.58579 3.25 2 3.25H7Z"
                    fill="#858585"
                  />
                </svg>
                <span className="text-sm font-medium">Track Your Order</span>
              </button>
              <button className="flex items-center gap-2 hover:text-green-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3.75C9.95445 3.75 8.267 5.45594 8.267 7.517C8.267 9.57068 9.9471 11.25 12 11.25C14.0456 11.25 15.733 9.54406 15.733 7.483C15.733 5.42932 14.0529 3.75 12 3.75ZM6.767 7.517C6.767 4.64206 9.11155 2.25 12 2.25C14.8811 2.25 17.233 4.60068 17.233 7.483C17.233 10.3579 14.8884 12.75 12 12.75C9.1189 12.75 6.767 10.3993 6.767 7.517ZM8 15.75C6.21421 15.75 4.75 17.2142 4.75 19V20C4.75 20.1358 4.86421 20.25 5 20.25H19C19.1358 20.25 19.25 20.1358 19.25 20V19C19.25 17.2142 17.7858 15.75 16 15.75H8ZM3.25 19C3.25 16.3858 5.38579 14.25 8 14.25H16C18.6142 14.25 20.75 16.3858 20.75 19V20C20.75 20.9642 19.9642 21.75 19 21.75H5C4.03579 21.75 3.25 20.9642 3.25 20V19Z"
                    fill="#858585"
                  />
                </svg>
                <span className="text-sm font-medium">Sign In/Register</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      {showMobileMenu && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setShowMobileMenu(false)}
          ></div>
          
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl lg:hidden overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button 
                onClick={() => setShowMobileMenu(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              <nav className="space-y-4">
                <a href="#" className="block py-2 text-gray-700 hover:text-green-500 font-medium">
                  Home
                </a>
                <a href="#" className="block py-2 text-gray-700 hover:text-green-500 font-medium">
                  New Product
                </a>
                <a href="#" className="block py-2 text-gray-700 hover:text-green-500 font-medium">
                  Promotion
                </a>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-xs text-gray-500 font-semibold mb-2">CATEGORIES</p>
                  {categories.filter(cat => cat.id !== 'all').map((cat) => (
                    <button 
                      key={cat.id}
                      onClick={() => {
                        handleCategoryClick(cat.id);
                        setShowMobileMenu(false);
                      }} 
                      className="block w-full text-left py-2 text-gray-700 hover:text-green-500"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <a href="#" className="flex items-center gap-2 py-2 text-gray-700 hover:text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M14 3.25C14.4641 3.25 14.9091 3.43451 15.2373 3.7627C15.5655 4.09088 15.75 4.53587 15.75 5V6.25H19.3232C20.0381 6.2501 20.6822 6.68564 20.9473 7.35156L22.5537 11.3652C22.6824 11.6882 22.75 12.0345 22.75 12.3848V18.333C22.75 18.7971 22.5655 19.2421 22.2373 19.5703C21.9091 19.8985 21.4641 20.083 21 20.083H19.8203C19.7975 20.1596 19.7709 20.2355 19.7402 20.3096C19.6229 20.5926 19.451 20.8498 19.2344 21.0664C19.0177 21.283 18.7606 21.455 18.4775 21.5723C18.1944 21.6896 17.8905 21.75 17.584 21.75C17.2775 21.75 16.9736 21.6896 16.6904 21.5723C16.4074 21.455 16.1502 21.283 15.9336 21.0664C15.717 20.8498 15.545 20.5926 15.4277 20.3096C15.4088 20.2639 15.3939 20.2165 15.3779 20.1699H8.79004C8.77429 20.216 8.75986 20.2625 8.74121 20.3076C8.62408 20.5907 8.45191 20.8487 8.23535 21.0654C8.01885 21.282 7.76142 21.454 7.47852 21.5713C7.19558 21.6886 6.89222 21.7489 6.58594 21.749C6.27969 21.7491 5.97636 21.6893 5.69336 21.5723C5.41023 21.4551 5.1523 21.283 4.93555 21.0664C4.68003 20.811 4.49202 20.5017 4.37793 20.166H3C2.53587 20.166 2.09088 19.9815 1.7627 19.6533C1.43451 19.3251 1.25 18.8801 1.25 18.416V13C1.25 12.5858 1.58579 12.25 2 12.25C2.41421 12.25 2.75 12.5858 2.75 13V14.25H14.25V5C14.25 4.9337 14.2236 4.87013 14.1768 4.82324C14.1299 4.77636 14.0663 4.75 14 4.75H10C9.58579 4.75 9.25 4.41421 9.25 4C9.25 3.58579 9.58579 3.25 10 3.25H14ZM17.584 18.582C17.4745 18.582 17.3658 18.6036 17.2646 18.6455C17.1635 18.6874 17.0715 18.7488 16.9941 18.8262C16.9167 18.9036 16.8554 18.9956 16.8135 19.0967C16.7716 19.1979 16.75 19.3065 16.75 19.416C16.75 19.5255 16.7716 19.6342 16.8135 19.7354C16.8554 19.8365 16.9167 19.9285 16.9941 20.0059C17.0715 20.0833 17.1635 20.1446 17.2646 20.1865C17.3658 20.2284 17.4745 20.25 17.584 20.25C17.6935 20.25 17.8021 20.2284 17.9033 20.1865C18.0044 20.1446 18.0964 20.0833 18.1738 20.0059C18.2512 19.9285 18.3126 19.8365 18.3545 19.7354C18.3964 19.6342 18.418 19.5255 18.418 19.416C18.418 19.3065 18.3964 19.1979 18.3545 19.0967C18.3126 18.9956 18.2512 18.9036 18.1738 18.8262C18.0964 18.7488 18.0044 18.6874 17.9033 18.6455C17.8021 18.6036 17.6935 18.582 17.584 18.582ZM6.58496 18.583C6.36398 18.5831 6.15131 18.6708 5.99512 18.8271C5.83918 18.9834 5.75194 19.1953 5.75195 19.416C5.75205 19.637 5.83977 19.8497 5.99609 20.0059C6.07344 20.0831 6.1656 20.1438 6.2666 20.1855C6.36758 20.2273 6.47569 20.249 6.58496 20.249C6.69438 20.249 6.80323 20.2275 6.9043 20.1855C7.00533 20.1436 7.09749 20.0823 7.1748 20.0049C7.25204 19.9275 7.3127 19.8354 7.35449 19.7344C7.39627 19.6334 7.41796 19.5253 7.41797 19.416C7.41792 19.3066 7.39641 19.1978 7.35449 19.0967C7.31258 18.9957 7.2512 18.9035 7.17383 18.8262C7.0176 18.6702 6.80572 18.583 6.58496 18.583ZM15.75 15C15.75 15.4142 15.4142 15.75 15 15.75H2.75V18.416C2.75 18.4823 2.77636 18.5459 2.82324 18.5928C2.87013 18.6397 2.9337 18.666 3 18.666H4.37793C4.49183 18.3308 4.67964 18.0218 4.93457 17.7666C5.37192 17.329 5.96527 17.0833 6.58398 17.083C7.20238 17.0827 7.79573 17.3278 8.2334 17.7646L8.23438 17.7656C8.45102 17.9821 8.6229 18.2395 8.74023 18.5225C8.76027 18.5708 8.77627 18.6205 8.79297 18.6699H15.375C15.3917 18.6206 15.4078 18.5707 15.4277 18.5225C15.545 18.2394 15.717 17.9823 15.9336 17.7656C16.1502 17.549 16.4074 17.3771 16.6904 17.2598C16.9736 17.1425 17.8905 17.082 17.584 17.082C17.8905 17.082 18.1944 17.1425 18.4775 17.2598C18.7606 17.377 19.0177 17.549 19.2344 17.7656C19.451 17.9823 19.6229 18.2394 19.7402 18.5225C19.7484 18.5421 19.7541 18.5631 19.7617 18.583H21C21.0663 18.583 21.1299 18.5566 21.1768 18.5098C21.2236 18.4629 21.25 18.3993 21.25 18.333V14.75H18C17.5858 14.75 17.25 14.4142 17.25 14V10C17.25 9.58579 17.5858 9.25 18 9.25H20.0918L19.5547 7.90723L19.5537 7.90625C19.5166 7.81284 19.4259 7.7501 19.3232 7.75H15.75V15ZM18.75 13.25H21.25V12.3848C21.25 12.2274 21.2193 12.0696 21.1602 11.9209L20.6914 10.75H18.75V13.25ZM3 9.25C3.41421 9.25 3.75 9.58579 3.75 10C3.75 10.4142 3.41421 10.75 3 10.75H2C1.58579 10.75 1.25 10.4142 1.25 10C1.25 9.58579 1.58579 9.25 2 9.25H3ZM5 6.25C5.41421 6.25 5.75 6.58579 5.75 7C5.75 7.41421 5.41421 7.75 5 7.75H2C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H5ZM7 3.25C7.41421 3.25 7.75 3.58579 7.75 4C7.75 4.41421 7.41421 4.75 7 4.75H2C1.58579 4.75 1.25 4.41421 1.25 4C1.25 3.58579 1.58579 3.25 2 3.25H7Z" fill="currentColor"/>
                    </svg>
                    <span className="text-sm">Track Your Order</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 py-2 text-gray-700 hover:text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 3.75C9.95445 3.75 8.267 5.45594 8.267 7.517C8.267 9.57068 9.9471 11.25 12 11.25C14.0456 11.25 15.733 9.54406 15.733 7.483C15.733 5.42932 14.0529 3.75 12 3.75ZM6.767 7.517C6.767 4.64206 9.11155 2.25 12 2.25C14.8811 2.25 17.233 4.60068 17.233 7.483C17.233 10.3579 14.8884 12.75 12 12.75C9.1189 12.75 6.767 10.3993 6.767 7.517ZM8 15.75C6.21421 15.75 4.75 17.2142 4.75 19V20C4.75 20.1358 4.86421 20.25 5 20.25H19C19.1358 20.25 19.25 20.1358 19.25 20V19C19.25 17.2142 17.7858 15.75 16 15.75H8ZM3.25 19C3.25 16.3858 5.38579 14.25 8 14.25H16C18.6142 14.25 20.75 16.3858 20.75 19V20C20.75 20.9642 19.9642 21.75 19 21.75H5C4.03579 21.75 3.25 20.9642 3.25 20V19Z" fill="currentColor"/>
                    </svg>
                    <span className="text-sm">Sign In/Register</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Mobile Search Modal */}
      {showMobileSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex items-start justify-center pt-4">
          <div className="bg-white w-11/12 max-w-md rounded-lg shadow-xl">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Search</h3>
              <button 
                onClick={() => setShowMobileSearch(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={(e) => { handleSearch(e); setShowMobileSearch(false); }} className="p-4">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={localSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="mb-4">
                <select 
                  value={localCategory}
                  onChange={(e) => setLocalCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-green-500 bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#68D237] hover:bg-green-600 text-white py-3 rounded-lg font-medium transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
