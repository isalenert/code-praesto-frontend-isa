import React from "react";

// Components
import Navbar from "../components/layout/Navbar";
import IconButton from "../components/buttons/IconButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";

// Assets
import ArrowIcon from "../assets/icons/ArrowIcon.png";

function TestPage() {
  return (
    <>
      <Navbar />
      
      <div className="mt-40 space-x-4 flex">
        <PrimaryButton href="/register">Registre-se</PrimaryButton>
        <SecondaryButton href="/login">Login</SecondaryButton>
        <IconButton iconPath={ArrowIcon} href="/test">Icon</IconButton>
      </div>
    </>
  );
}

export default TestPage;
