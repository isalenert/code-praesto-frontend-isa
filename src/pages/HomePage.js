import React from 'react';

// components
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Section from "../components/layout/Section";
import Footer from "../components/layout/Footer";
import CardSection from '../components/layout/CardSection';

// assets
import FlameIcon from "../assets/icons/Fire.png"

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      {/* <Acaccordion /> */}

      <Section section="participate" />
      
      <CardSection className="mt-40" title="Populares" href={"/test"} iconPath={FlameIcon}>
        <p>Card</p>
      </CardSection>

      <Section section="oraganize" />
      <Footer />
    </div>
  )
}

export default HomePage;