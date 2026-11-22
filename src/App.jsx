import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ReportSection from "./components/ReportSection";
import VehicleChecks from "./components/VehicleChecks";
import HowWeHelp from "./components/HowWeHelp";
import WhatMakesUsSpecial from "./components/WhatMakesUsSpecial";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import LiveChat from "./components/LiveChat";

function Home() {
  return (
    <>
      <Hero />
      <ReportSection />
      <VehicleChecks />
      <HowWeHelp />
      <WhatMakesUsSpecial />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0B1120]">
        <Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
        <Footer />
         <LiveChat />
      </div>
    </BrowserRouter>
  );
}

export default App;