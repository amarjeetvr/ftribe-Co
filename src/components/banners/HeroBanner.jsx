import { useState } from 'react';

const watchImages = ['/watch01.jpg', '/watch02.jpg', '/watch03.jpg'];

export default function HeroBanner() {
  const [currentWatchIndex, setCurrentWatchIndex] = useState(0);

  const handlePrevWatch = () => {
    setCurrentWatchIndex((prev) => (prev - 1 + watchImages.length) % watchImages.length);
  };

  const handleNextWatch = () => {
    setCurrentWatchIndex((prev) => (prev + 1) % watchImages.length);
  };

  return (
    <div className="space-y-3 md:space-y-4">
      {/* Mobile stacked view */}
      <div className="md:hidden space-y-3">
        {/* Mobile hero with watch background carousel */}
        <div className="relative rounded-lg overflow-hidden min-h-[260px]">
          <img
            src={watchImages[currentWatchIndex]}
            alt={`Watch ${currentWatchIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 bg-black/25 text-white p-5 pb-6 min-h-[260px] flex flex-col justify-between">
            <div>
              <div className="flex justify-between text-xs text-gray-100 mb-6">
                <span>Category</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrevWatch}
                    className="text-lg hover:text-white transition"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={handleNextWatch}
                    className="text-lg hover:text-white transition"
                  >
                    ›
                  </button>
                </div>
              </div>
              <div className="text-xl font-semibold leading-snug">
                TitSUPER FASHION SALEe 1
                <br />
                BEAUTIFUL NICE
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button className="bg-[#64c933] hover:bg-[#55b528] text-white px-5 py-2 rounded-md text-sm font-medium transition">
                Order Now
              </button>
              <div className="flex items-center gap-2 text-gray-200 text-xs">
                <span className="w-10 h-1 bg-gray-200 rounded-full" />
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Asus card (mobile) with gaming background */}
        <div className="relative rounded-lg overflow-hidden min-h-[180px]">
          <img
            src="/gaming.jpg"
            alt="Gaming Laptop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 bg-black/30 text-white p-5 md:pl-10 h-full flex flex-col justify-between">
            <div>
              <div className="text-xs mb-2">Asus</div>
              <div className="text-lg font-semibold leading-snug">Supper Sale<br />Laptop Gaming</div>
            </div>
            <div className="mt-4">
              <button className="bg-[#64c933] hover:bg-[#55b528] text-white px-5 py-2 rounded-md text-sm font-medium transition">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Black Friday card (mobile) with fridaysale image */}
        <div className="relative rounded-lg overflow-hidden min-h-[140px]">
          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&h=400&fit=crop&q=80"
            alt="Black Friday Sale"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-white p-5 h-full flex flex-col justify-center">
            <div className="text-xs mb-2 drop-shadow-lg">Big deal</div>
            <div className="text-base font-semibold drop-shadow-lg">Black Friday</div>
            <div className="text-sm mt-1 drop-shadow-lg">Buy 1 Get 1</div>
          </div>
        </div>

        {/* Oppo A42 card (mobile) with image background */}
        <div className="relative rounded-lg overflow-hidden min-h-[140px]">
          <img
            src="/oppo-a42.jpg"
            alt="Oppoo A42"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 bg-black/30 text-white p-5 h-full flex flex-col justify-center">
            <div className="text-xs mb-2">New product</div>
            <div className="text-base font-semibold">Oppoo A42</div>
            <div className="text-sm mt-1">Camera 24Mpx</div>
          </div>
        </div>

        {/* Wine, Cosmetic, Sunglasses cards (mobile) with same images as desktop promos */}
        <div className="relative rounded-lg overflow-hidden min-h-[140px]">
          <img
            src="/wine.jpg"
            alt="Wine"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 bg-black/30 text-white p-5 h-full flex flex-col justify-center">
            <div className="text-xs mb-2">Wine</div>
            <div className="text-base font-semibold">Drunkenness</div>
            <div className="text-sm mt-1">Deep Flavor</div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden min-h-[140px]">
          <img
            src="/cosmetic.jpg"
            alt="Cosmetic"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 bg-black/30 text-white p-5 h-full flex flex-col justify-center">
            <div className="text-xs mb-2">Cosmetic</div>
            <div className="text-base font-semibold">MAXIMI</div>
            <div className="text-sm mt-1">Sale 50%</div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden min-h-[140px]">
          <img
            src="/sunglasses.jpg"
            alt="Sunglasses"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 bg-black/30 text-white p-5 h-full flex flex-col justify-center">
            <div className="text-xs mb-2">Sunglasses</div>
            <div className="text-base font-semibold">Authentic</div>
            <div className="text-sm mt-1">Sale off 50%</div>
          </div>
        </div>

        {/* Hand Wash & Fashion (mobile) with same images as desktop bottom row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative rounded-lg overflow-hidden min-h-[140px]">
            <img
              src="/hand-wash.jpg"
              alt="Hand Wash"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-black/30 text-white p-4 h-full flex flex-col justify-center">
              <div className="text-xs mb-2">Hand Wash</div>
              <div className="text-sm font-semibold">Clean hands</div>
              <div className="text-sm mt-1">Clean bacteria</div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden min-h-[140px]">
            <img
              src="/fashion.jpg"
              alt="Fashion"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-black/30 text-white p-4 h-full flex flex-col justify-center">
              <div className="text-xs mb-2">Fashion</div>
              <div className="text-sm font-semibold">Nice bag</div>
              <div className="text-sm mt-1">Nice style</div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block space-y-4">
        <div className="grid grid-cols-12 gap-4 items-start">
          <div className="col-span-3 relative rounded-lg overflow-hidden min-h-[560px] text-center">
            <img
              src="/gaming.jpg"
              alt="Gaming Laptop"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-black/25 text-white p-10 flex flex-col justify-between min-h-[560px]">
              <div>
                <div className="text-sm mb-4">Asus</div>
                <div className="text-3xl font-semibold leading-snug">Supper Sale<br />Laptop Gaming</div>
              </div>
              <div>
                <button className="bg-[#64c933] hover:bg-[#55b528] text-white px-6 py-3 rounded-md text-sm font-medium transition">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-6 self-start relative rounded-lg overflow-hidden min-h-[420px]">
            <img
              src={watchImages[currentWatchIndex]}
              alt={`Watch ${currentWatchIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-black/20 md:bg-black/30 text-white p-10 flex flex-col justify-between min-h-[420px]">
              <div className="flex justify-between text-gray-100">
                <span className="text-sm">New Product</span>
                <div className="flex items-center gap-4 text-lg">
                  <button
                    type="button"
                    onClick={handlePrevWatch}
                    className="hover:text-white transition"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={handleNextWatch}
                    className="hover:text-white transition"
                  >
                    ›
                  </button>
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="text-4xl font-semibold">HAND WATCH</div>
                <div className="text-3xl font-semibold">ROSSINI</div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button className="bg-[#64c933] hover:bg-[#55b528] text-white px-7 py-3 rounded-md text-sm font-medium transition">
                  Buy Now
                </button>
                
              </div>
            </div>
          </div>

          <div className="col-span-5 space-y-4">
            <div className="relative rounded-lg overflow-hidden min-h-[180px]">
              <img
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&h=400&fit=crop&q=80"
                alt="Black Friday Sale"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 text-white p-6 h-full flex flex-col justify-center">
                <div className="text-xs mb-3 drop-shadow-lg">Big deal</div>
                <div className="text-lg font-semibold drop-shadow-lg">Black Friday</div>
                <div className="text-sm mt-1 drop-shadow-lg">Buy 1 Get 1</div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden min-h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=600&h=600&fit=crop&q=80"
                alt="Fujiwa ION Alkaline"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 text-white p-6 h-full flex flex-col justify-center">
                <div className="text-xs mb-3 drop-shadow-lg">Fujiwa</div>
                <div className="text-lg font-semibold drop-shadow-lg">ION Alkaline</div>
                <div className="text-sm leading-snug mt-1 drop-shadow-lg">Micronutrient<br />Supplements</div>
              </div>
            </div>
          </div>

          {/* Bottom promo cards placed under hero, filling the gap */}
          <div className="col-span-12 col-start-4 -mt-36 lg:-mt-36">
            <div className="flex gap-4 justify-between">
              <div className="relative rounded-lg overflow-hidden min-h-[128px] flex-1">
                <img
                  src="/wine.jpg"
                  alt="Wine"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 bg-black/30 text-white p-5 h-full flex flex-col justify-center">
                  <div className="text-xs mb-3">Wine</div>
                  <div className="text-base font-semibold">Drunkenness</div>
                  <div className="text-sm mt-1">Deep Flavor</div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden min-h-[128px] flex-1">
                <img
                  src="/cosmetic.jpg"
                  alt="Cosmetic"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 bg-black/30 text-white p-5 h-full flex flex-col justify-center">
                  <div className="text-xs mb-3">Cosmetic</div>
                  <div className="text-base font-semibold">MAXIMI</div>
                  <div className="text-sm mt-1">Sale 50%</div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden min-h-[128px] flex-1">
                <img
                  src="/sunglasses.jpg"
                  alt="Sunglasses"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 bg-black/30 text-white p-5 h-full flex flex-col justify-center">
                  <div className="text-xs mb-3">Sunglasses</div>
                  <div className="text-base font-semibold">Authentic</div>
                  <div className="text-sm mt-1">Sale off 50%</div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden min-h-[128px] flex-1">
                <img
                  src="/hand-wash.jpg"
                  alt="Hand Wash"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 bg-black/30 text-white p-5 h-full flex flex-col justify-center">
                  <div className="text-xs mb-3">Hand Wash</div>
                  <div className="text-base font-semibold">Clean hands</div>
                  <div className="text-sm mt-1">Clean bacteria</div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden min-h-[128px] flex-1">
                <img
                  src="/fashion.jpg"
                  alt="Fashion"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 bg-black/30 text-white p-5 h-full flex flex-col justify-center">
                  <div className="text-xs mb-3">Fashion</div>
                  <div className="text-base font-semibold">Nice bag</div>
                  <div className="text-sm mt-1">Nice style</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
