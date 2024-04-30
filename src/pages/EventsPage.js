import React from 'react';

// components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EventsList from '../components/layout/EventsList';
import EventsFooter from '../components/layout/EventsFooter';


function EventsPage() {
    return (
      <div>
        <Navbar />
        <EventsList /> 
        {/* <Acaccordion /> */}
        <EventsFooter />
        
        <Footer />
      </div>
    )
  }


export default EventsPage;