import React from 'react';

// components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Register from '../components/layout/Register';

function RegisterPage() {
    return (
      <div>
        <Navbar />
       
        {/* <Acaccordion /> */}
        <Register />
        <Footer />
      </div>
    )
  }


export default RegisterPage;