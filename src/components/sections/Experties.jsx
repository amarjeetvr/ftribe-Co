import React from "react";

const PromoCard = ({ label, titleLine1, titleLine2, bgImage }) => {
  return (
    <div
      className="relative rounded-2xl p-8 md:p-12 w-full md:w-[564px] h-[220px] md:h-[317px] flex flex-col justify-center shadow-lg overflow-hidden group"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.2) 100%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Hover Zoom Effect on Background */}
      <div 
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="flex flex-col gap-3 md:gap-5 z-10">
        <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-green-400">
          {label}
        </p>

        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">
          {titleLine1}
          <br />
          <span className="opacity-90">{titleLine2}</span>
        </h2>

        <button
          className="w-fit mt-2 min-w-[120px] h-11 bg-[#68D237] text-white rounded-xl px-6 py-2 text-sm font-bold hover:bg-green-600 hover:shadow-lg hover:shadow-green-900/20 transition-all active:scale-95"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

const Experties = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 max-w-7xl mx-auto">
        <PromoCard
          label="Hot Deal"
          titleLine1="TOURS SAFE"
          titleLine2="TRUE DISCOUNT"
          bgImage="https://images.daytrip.com/guimaraes2.jpg?w=768&q=30"
        />

        <PromoCard
          label="New Product"
          titleLine1="EXPERIENCE TECHNOLOGY"
          titleLine2="RELAX HIGHLY"
          bgImage="https://th.bing.com/th/id/OIP.NYMYRqLlc3zhQY8FPAR5FAHaE8?w=254&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />
      </div>
    </section>
  );
};

export default Experties;