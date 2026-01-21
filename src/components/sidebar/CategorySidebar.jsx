export default function CategorySidebar() {
  return (
    <div className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex flex-col items-center text-center min-h-[320px] md:min-h-[520px]">
      <div className="text-sm text-gray-600 mb-4 md:mb-6">Asus</div>
      <div className="text-xl md:text-2xl font-semibold leading-snug text-gray-900 mb-6 md:mb-8">
        Supper Sale
        <br />
        Laptop Gaming
      </div>
      <div className="flex-1" />
      <button className="bg-[#64c933] hover:bg-[#55b528] text-white px-6 py-3 rounded-md text-sm font-medium transition">
        Order Now
      </button>
    </div>
  );
}
