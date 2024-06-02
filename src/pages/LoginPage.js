import React from 'react';

// components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Login from '../components/layout/Login';

function LoginPage() {
    return (
      <div>
        <Navbar />
        {/* <Acaccordion /> */}
        <Login />
        <Footer />
      </div>
    )
  }


export default LoginPage;