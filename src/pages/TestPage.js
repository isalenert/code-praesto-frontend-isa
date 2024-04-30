import React from "react";

// Components
import Navbar from "../components/layout/Navbar";
import IconButton from "../components/buttons/IconButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import CardSection from "../components/layout/CardSection";
import CardMin from "../components/card/CardMini";

// Assets
import ArrowIcon from "../assets/icons/ArrowIcon.png";
import FlameIcon from "../assets/icons/Fire.png"

import MinCardLogo1 from "../assets/bussines-logo.png";
import MinCardLogo2 from "../assets/bussines-logo-2.png";
import MinCardLogo3 from "../assets/bussines-logo-3.png";

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
        <CardMin
          title={"HackTech 2024"}
          bussinessName={"Tech Innovations Ltda."}
          coverImage={MinCardLogo1}
          duration={"10 de abril - 12 de abril"}
          qntParticipants={200}
          description={"Desafio de programação de 48 horas para criar soluções inovadoras usando tecnologias de ponta."}
          href={"/test"}
          price={"R$ 10.000,00"}
        />

        <CardMin
          title={"CodeFrenzy"}
          bussinessName={"DevLeague"}
          coverImage={MinCardLogo2}
          duration={"25 de abril - 26 de abril"}
          qntParticipants={50}
          description={"Maratona de codificação de 24 horas para resolver problemas de alta complexidade e desenvolver projetos criativos."}
          href={"/test"}
          price={"R$ 5.000 em dinheiro e oportunidade de estágio na DevLeague."}
        />

        <CardMin
          title={"TechSprint"}
          bussinessName={"InnovateX"}
          coverImage={MinCardLogo3}
          duration={"15 de junho - 17 de junho"}
          qntParticipants={800}
          description={"Hackaton de fim de semana para desenvolver soluções disruptivas nas áreas de inteligência artificial, IoT e blockchain."}
          href={"/test"}
          price={"R$ 15.000 em prêmios e mentoria para desenvolvimento do projeto vencedor."}
        />
      </CardSection>
    </>
  );
}

export default TestPage;
