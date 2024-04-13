// Components
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Section from "../components/layout/Section";
import Footer from "../components/layout/Footer";

// Stylesheets
import '../styles/General.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Acaccordion />*/}
      <Section section="participate" />

      {/* <Card-List /> */}

      <Section section="oraganize" />
      <Footer />
    </div>
  );
}

export default App;
