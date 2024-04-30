import React from 'react';

// components
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Section from "../components/layout/Section";
import Footer from "../components/layout/Footer";
import CardSection from '../components/layout/CardSection';
import CardMin from '../components/card/CardMini';

// assets
import FlameIcon from "../assets/icons/Fire.png"
import MinCardLogo1 from "../assets/bussines-logo.png";
import MinCardLogo2 from "../assets/bussines-logo-2.png";
import MinCardLogo3 from "../assets/bussines-logo-3.png";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* <Acaccordion /> */}

      <Section section="participate" />

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

      <Section section="oraganize" />
      <Footer />
    </div>
  )
}

export default HomePage;