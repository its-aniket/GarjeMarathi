
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Info from "@/components/Info";

import Initiatives from "@/components/Initiatives";
import Navbar from "@/components/Navbar";
import GlobalCommunityMap from "@/components/WorldMap";

export default function Home() {
  return (
    <div>
      <Navbar />
      <GlobalCommunityMap />
      {/* <Banner /> */}
      <Info />
      {/* <GMGImpact /> */}
      <Initiatives />
      <ContactUs />
      <Footer />
    </div>
  );
}
