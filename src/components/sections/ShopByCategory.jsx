import { useState } from "react";
import ProductList from "./ProductList";

const categories = [
  "Real Estate",
  "Technology",
  "Watch",
  "Glasses",
  "Cosmetic",
  "Food High Grade",
];

export default function ShopByCategory() {
  const [selectedCategory, setSelectedCategory] = useState("Technology");

  return (
    <section className="py-10">
      <div className="max-w-[1680px] mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-work font-medium text-[20px] leading-[28px] tracking-normal">
  Shop By Categories
</h2>

          {/* Desktop Right Controls */}
          <div className="hidden md:flex items-center gap-4 text-sm text-gray-500">
            <span className="text-[#68D237] cursor-pointer">See All</span>
            <button>‹</button>
            <button>›</button>
          </div>

          {/* Mobile Arrows - Remove if not needed for products */}
        </div>

        {/* ================= MOBILE DROPDOWN ================= */}
        <div className="md:hidden mb-6">
          <select 
            className="w-full border border-gray-200 rounded px-4 py-2 text-sm bg-white cursor-pointer appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.5rem center',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

     {/* ================= DESKTOP CATEGORY TABS ================= */}
<div className="hidden md:grid grid-cols-6 gap-4 mb-10">
  {categories.map((item) => (
    <div
      key={item}
      onClick={() => setSelectedCategory(item)}
      style={item === selectedCategory ? { border: '1px solid #68D237' } : {}}
      className={`relative flex flex-col items-center justify-center gap-7 rounded-lg px-4 py-6 cursor-pointer
        ${
          item === selectedCategory
            ? "bg-[#F6FFF2] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[9px] after:w-0 after:h-0 after:border-l-[9px] after:border-r-[9px] after:border-t-[9px] after:border-l-transparent after:border-r-transparent after:border-t-[#F6FFF2] before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[10px] before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-t-[10px] before:border-l-transparent before:border-r-transparent before:border-t-[#68D237]"
            : "border border-gray-200 bg-white"
        }`}
    >
      {/* SVG ICONS */}
      <div className="w-12 h-12 flex items-center justify-center">
        {item === "Technology" ? (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_862_658)">
              <path d="M28.57 15.428H19.428C17.2188 15.428 15.428 17.2188 15.428 19.428V28.57C15.428 30.7791 17.2188 32.57 19.428 32.57H28.57C30.7791 32.57 32.57 30.7791 32.57 28.57V19.428C32.57 17.2188 30.7791 15.428 28.57 15.428Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.572 20.572H27.43V27.43H20.572V20.572Z" stroke="#68D237" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32 6H16C10.4772 6 6 10.4772 6 16V32C6 37.5228 10.4772 42 16 42H32C37.5228 42 42 37.5228 42 32V16C42 10.4772 37.5228 6 32 6Z" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36 20H32.572" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36 28H32.572" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.428 20H12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.428 28H12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 12V15.428" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28 12V15.428" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 32.572V36" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28 32.572V36" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_862_658">
                <rect width="48" height="48" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ) : item === "Watch" ? (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_1483)">
              <path d="M14.578 34.87L16.038 40.504C16.2597 41.3625 16.7602 42.123 17.4611 42.666C18.162 43.209 19.0234 43.5038 19.91 43.504H28.088C28.9746 43.5038 29.836 43.209 30.5369 42.666C31.2378 42.123 31.7383 41.3625 31.96 40.504L33.424 34.866" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 28V20" stroke="#68D237" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M33.4219 13.13L31.9619 7.496C31.7403 6.6375 31.2397 5.877 30.5388 5.334C29.838 4.791 28.9765 4.4962 28.0899 4.496H19.9119C19.0253 4.4962 18.1639 4.791 17.463 5.334C16.7622 5.877 16.2616 6.6375 16.0399 7.496L14.5759 13.132" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.668 35H32.334C33.5275 35.0416 34.6888 34.6084 35.5635 33.7952C36.4381 32.9821 36.9547 31.8554 37 30.662V17.338C36.9542 16.1445 36.4371 15.0177 35.5622 14.2046C34.6872 13.3916 33.5257 12.9584 32.332 13H15.668C14.4742 12.9578 13.3123 13.3908 12.4373 14.204C11.5622 15.0172 11.0453 16.1443 11 17.338V30.66C11.0214 31.2515 11.1591 31.833 11.4053 32.3713C11.6515 32.9096 12.0014 33.394 12.4349 33.7971C12.8684 34.2001 13.377 34.5138 13.9318 34.7202C14.4865 34.9266 15.0765 35.0217 15.668 35V35Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M30 28V24" stroke="#68D237" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 28V26" stroke="#68D237" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_1_1483">
                <rect width="48" height="48" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ) : item === "Glasses" ? (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_862_163)">
              <path d="M10 20.766V9.99997C10.0002 9.62865 10.1038 9.26471 10.2991 8.94892C10.4944 8.63313 10.7738 8.37795 11.106 8.21197L15.106 6.21197C15.4108 6.05964 15.7495 5.98773 16.09 6.00306C16.4304 6.0184 16.7613 6.12046 17.0512 6.29958C17.3411 6.4787 17.5805 6.72892 17.7465 7.02651C17.9126 7.3241 17.9998 7.65919 18 7.99997V20.764" stroke="#68D237" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 20.766H18C18.5304 20.766 19.0391 20.9767 19.4142 21.3518C19.7893 21.7268 20 22.2356 20 22.766V38C20 39.0609 19.5786 40.0783 18.8284 40.8284C18.0783 41.5786 17.0609 42 16 42H12C10.9391 42 9.92172 41.5786 9.17157 40.8284C8.42143 40.0783 8 39.0609 8 38V22.766C8 22.2356 8.21071 21.7268 8.58579 21.3518C8.96086 20.9767 9.46957 20.766 10 20.766Z" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32 24H36C37.0609 24 38.0783 24.4214 38.8284 25.1716C39.5786 25.9217 40 26.9391 40 28V40C40 40.5304 39.7893 41.0391 39.4142 41.4142C39.0391 41.7893 38.5304 42 38 42H30C29.4696 42 28.9609 41.7893 28.5858 41.4142C28.2107 41.0391 28 40.5304 28 40V28C28 26.9391 28.4214 25.9217 29.1716 25.1716C29.9217 24.4214 30.9391 24 32 24V24Z" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 30H8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_862_163">
                <rect width="48" height="48" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ) : item === "Cosmetic" ? (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_862_705)">
              <path d="M10 10.5H18" stroke="#68D237" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.47803 21.924L9.76003 23.35C11.0314 24.1449 12.5006 24.5664 14 24.5664C15.4994 24.5664 16.9687 24.1449 18.24 23.35L20.522 21.924" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V10.17C17 13.986 18.036 17.73 20 21C21.9632 24.2713 23.0002 28.0148 23 31.83V40C23 41.0609 22.5786 42.0783 21.8284 42.8284C21.0783 43.5786 20.0609 44 19 44H9C7.93913 44 6.92172 43.5786 6.17157 42.8284C5.42143 42.0783 5 41.0609 5 40V31.83C5 28.014 6.036 24.27 8 21C9.96323 17.7287 11.0002 13.9852 11 10.17V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4Z" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36 34V44" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32 44H40" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36.0001 34C34.9921 34.0012 33.9959 33.7844 33.0796 33.3645C32.1633 32.9445 31.3487 32.3314 30.6916 31.5672C30.0345 30.8029 29.5504 29.9056 29.2726 28.9367C28.9948 27.9678 28.9298 26.9504 29.0821 25.954L30.9761 13.694C31.1261 12.72 31.9681 12 32.9581 12H39.4821C39.9723 11.999 40.4458 12.1782 40.8127 12.5034C41.1796 12.8286 41.4142 13.2772 41.4721 13.764L42.9501 26.194C43.0657 27.1748 42.9721 28.1689 42.6755 29.1109C42.3788 30.0528 41.8859 30.9212 41.2292 31.6588C40.5725 32.3964 39.767 32.9864 38.8656 33.39C37.9643 33.7935 36.9876 34.0014 36.0001 34Z" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M42.22 20H30" stroke="#68D237" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_862_705">
                <rect width="48" height="48" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ) : item === "Real Estate" ? (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_862_635)">
              <path d="M39.428 19.224V8C39.428 7.46957 39.2173 6.96086 38.8422 6.58579C38.4671 6.21071 37.9584 6 37.428 6H33.714C33.1836 6 32.6748 6.21071 32.2998 6.58579C31.9247 6.96086 31.714 7.46957 31.714 8V12.612" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 21.428L21.396 8.232C22.1209 7.61068 23.0442 7.26917 23.999 7.26917C24.9538 7.26917 25.877 7.61068 26.602 8.232L42 21.428" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.57202 19.224V38C8.57202 39.0609 8.99345 40.0783 9.7436 40.8284C10.4937 41.5786 11.5112 42 12.572 42H22" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M41.9999 42L38.7219 38.722" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M33.448 26C34.4262 26 35.3949 26.1927 36.2986 26.567C37.2024 26.9414 38.0236 27.4901 38.7153 28.1818C39.407 28.8735 39.9557 29.6946 40.33 30.5984C40.7043 31.5021 40.897 32.4708 40.897 33.449C40.897 34.4272 40.7043 35.3959 40.33 36.2996C39.9557 37.2034 39.407 38.0245 38.7153 38.7162C38.0236 39.4079 37.2024 39.9566 36.2986 40.331C35.3949 40.7053 34.4262 40.898 33.448 40.898C31.4724 40.898 29.5777 40.1132 28.1808 38.7162C26.7838 37.3193 25.999 35.4246 25.999 33.449C25.999 31.4734 26.7838 29.5787 28.1808 28.1818C29.5777 26.7848 31.4724 26 33.448 26" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36.3461 32L32.724 35.622L30.55 33.448" stroke="#68D237" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_862_635">
                <rect width="48" height="48" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ) : item === "Food High Grade" ? (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_862_635_food)">
              <path d="M39.428 19.224V8C39.428 7.46957 39.2173 6.96086 38.8422 6.58579C38.4671 6.21071 37.9584 6 37.428 6H33.714C33.1836 6 32.6748 6.21071 32.2998 6.58579C31.9247 6.96086 31.714 7.46957 31.714 8V12.612" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 21.428L21.396 8.232C22.1209 7.61068 23.0442 7.26917 23.999 7.26917C24.9538 7.26917 25.877 7.61068 26.602 8.232L42 21.428" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.57202 19.224V38C8.57202 39.0609 8.99345 40.0783 9.7436 40.8284C10.4937 41.5786 11.5112 42 12.572 42H22" stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M41.9999 42L38.7219 38.722" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M33.448 26C34.4262 26 35.3949 26.1927 36.2986 26.567C37.2024 26.9414 38.0236 27.4901 38.7153 28.1818C39.407 28.8735 39.9557 29.6946 40.33 30.5984C40.7043 31.5021 40.897 32.4708 40.897 33.449C40.897 34.4272 40.7043 35.3959 40.33 36.2996C39.9557 37.2034 39.407 38.0245 38.7153 38.7162C38.0236 39.4079 37.2024 39.9566 36.2986 40.331C35.3949 40.7053 34.4262 40.898 33.448 40.898C31.4724 40.898 29.5777 40.1132 28.1808 38.7162C26.7838 37.3193 25.999 35.4246 25.999 33.449C25.999 31.4734 26.7838 29.5787 28.1808 28.1818C29.5777 26.7848 31.4724 26 33.448 26" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36.3461 32L32.724 35.622L30.55 33.448" stroke="#68D237" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_862_635_food">
                <rect width="48" height="48" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ) : (
          <div className="w-12 h-12 bg-gray-200 rounded" />
        )}
      </div>

      {/* CATEGORY TEXT (FIXED TYPOGRAPHY) */}
      <span
        className={`font-work font-semibold text-[18px] leading-[28px] tracking-normal text-center
          ${
            item === selectedCategory
              ? "text-black"
              : "text-gray-600"
          }`}
      >
        {item}
      </span>
    </div>
  ))}
</div>

        <ProductList />

      </div>
    </section>
  );
}
