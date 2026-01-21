export default function MainSection() {
  return (
    <section
      className="w-full  h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/wallet.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center justify-end">
        <div className="text-right max-w-xl">
          
          {/* Small Label */}
          <p className="text-sm tracking-widest text-white/80 mb-4">
            New Product
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            FASHIONABLE WALLETS
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-6">
            BIG GOOD SALE FOR HER
          </h2>

          {/* CTA */}
          <button className="mt-10 bg-green-500 hover:bg-green-600 transition text-white px-8 py-4 rounded-xl font-semibold">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
