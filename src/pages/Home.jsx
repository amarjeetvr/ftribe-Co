import TopBar from "../components/header/TopBar";
import Navbar from "../components/header/Navbar";
import CategorySidebar from "../components/sidebar/CategorySidebar";
import HeroBanner from "../components/banners/HeroBanner";
import ShopByCategory from "../components/sections/ShopByCategory";
import MainSection from "../components/sections/MainSection";
import TechnologySection from "../components/sections/TechnologySection";
import WatchSection from "../components/sections/WatchSection";
import CosmeticSection from "../components/sections/CosmeticSection";
import RealEstateSection from "../components/sections/RealEstateSection";
import LuxuryFoodSection from "../components/sections/LuxuryFoodSection";

import Footer from "../components/footer/Footer";
import Experties from "../components/sections/Experties";
import Support from "../components/sections/Support";
import PromoProduct from "../components/sections/PromoProduct";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="sm:px-9 mx-auto ">
        <div className="grid grid-cols-1 gap-4 mt-4">
          <section className="order-1">
            <HeroBanner />
          </section>
        </div>
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
            <ShopByCategory />
            <Experties />
        </div>
        

     
          
        <PromoProduct />
        <MainSection />
        <TechnologySection />
        <WatchSection />
        <CosmeticSection />
        <RealEstateSection />
        <LuxuryFoodSection />
      
      </main>
<Support />
      <Footer />
    </>
  );
}
