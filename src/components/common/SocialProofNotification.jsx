import { useState } from 'react';

const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slideIn">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-[280px] sm:w-[320px] md:w-[350px] p-4 relative">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close notification"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="flex gap-3">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=100&h=100&fit=crop"
              alt="Product"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-1">
              A customer has just bought
            </p>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
              UV Resistant Glasses - Imported
            </h3>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
              </div>
              <span className="text-xs text-gray-500">(13)</span>
              <span className="text-sm font-bold text-green-600 ml-auto">
                $250
              </span>
            </div>

            {/* Time and Location */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>15 minutes ago</span>
              <span>From New York</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
