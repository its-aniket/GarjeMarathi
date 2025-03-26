import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import GMGImpact from "@/components/GMGImpact";
import Info from "@/components/Info";

import Initiatives from "@/components/Initiatives";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Info />
      <GMGImpact />
      <Initiatives />
      <ContactUs />
      <Footer />
    </div>
  );
}
