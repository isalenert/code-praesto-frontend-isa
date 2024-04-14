// Components
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import Section from "../components/layout/Section";




function App() {
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
  );
}

export default App;
