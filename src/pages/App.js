// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";

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
