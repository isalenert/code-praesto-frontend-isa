import React from "react";

// Components
import Navbar from "../components/layout/Navbar";
import IconButton from "../components/buttons/IconButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import CardSection from "../components/layout/CardSection";

// Assets
import ArrowIcon from "../assets/icons/ArrowIcon.png";
import FlameIcon from "../assets/icons/Fire.png"
import CardMin from "../components/card/CardMini";

function TestPage() {
  return (
    <>
      <Navbar />
      
      <div className="mt-40 space-x-4 flex w-full">
        <PrimaryButton href="/register">Registre-se</PrimaryButton>
        <SecondaryButton href="/login">Login</SecondaryButton>
        <IconButton iconPath={ArrowIcon} href="/test">Icon</IconButton>
      </div>

      <CardSection className="mt-40" title="Populares" href={"/test"} iconPath={FlameIcon}>
        <CardMin />
        <CardMin />
        <CardMin />
        <CardMin />
        <CardMin />
        <CardMin />
      </CardSection>
    </>
  );
}

export default TestPage;
