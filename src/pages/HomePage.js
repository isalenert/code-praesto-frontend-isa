import React from 'react';

import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Section from "../components/layout/Section";
import Footer from "../components/layout/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Acaccordion /> */}
      <Section section="participate" />

      {/* <Card-List /> */}

      <Section section="oraganize" />
      <Footer />
    </div>
  )
}

export default HomePage;