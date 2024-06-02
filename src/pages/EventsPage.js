import React from 'react';

// components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EventsList from '../components/layout/EventsList';
import EventsFooter from '../components/layout/EventsFooter';
import InputLongo from '../components/inputs/InputLongo'; 
import CardSection from '../components/layout/CardSection'; 
import CardMin from "../components/card/CardMini";

// Assets
import ArrowIcon from "../assets/icons/ArrowIcon.png";
import FlameIcon from "../assets/icons/Fire.png"
import ClockIcon from "../assets/icons/Clock.png"
import ListaIcon from "../assets/icons/List.png"; 
import CommunityIcon from "../assets/icons/Community.png"; 
import StarIcon from "../assets/icons/Star.png";

import MinCardLogo1 from "../assets/bussines-logo.png";
import MinCardLogo2 from "../assets/bussines-logo-2.png";
import MinCardLogo3 from "../assets/bussines-logo-3.png";
import CardEventsPage from '../components/card/CardEventsPage';


function EventsPage() {
    return (
      <div>
        <Navbar />
        <EventsList /> 
        {/* <Acaccordion /> */}

        <InputLongo />
        <CardEventsPage
          title={"Todas as Competições"}
          coverImage={ListaIcon}
          description={"Todos os eventos, passado e presente."}
        />
        <CardEventsPage
          title={"Patrocinados"}
          coverImage={StarIcon}
          description={"Eventos patrocinados com prêmios."}
        />
        <CardEventsPage
          title={"Comunidades"}
          coverImage={CommunityIcon}
          description={"Criadas pelos organizadores e participantes do CodePraesto"}
        />
        <CardEventsPage
          title={"Populares"}
          coverImage={FlameIcon}
          description={"Eventos em Alta pela Comunidade."}
        />
        <CardSection className="mt-40" title="Competições Ativas" href={"/test"} iconPath={FlameIcon}>

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

        <CardMin
          title={"HackTech"}
          bussinessName={"Tech Innovations"}
          coverImage={MinCardLogo1}
          duration={"10 de abril - 12 de abril"}
          qntParticipants={200}
          description={"Desafio de Hackaton de 48 horas para desenvolver soluções modernas e completas com tecnologia de ponta."}
          href={"/test"}
          price={"R$ 15.000 em prêmios e mentoria para desenvolvimento do projeto vencedor."}
        />
      </CardSection>
      <CardSection className="mt-40" title="Concluídos Recentemente" href={"/test"} iconPath={ClockIcon}>

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

        <CardMin
          title={"HackTech"}
          bussinessName={"Tech Innovations"}
          coverImage={MinCardLogo1}
          duration={"10 de abril - 12 de abril"}
          qntParticipants={200}
          description={"Desafio de Hackaton de 48 horas para desenvolver soluções modernas e completas com tecnologia de ponta."}
          href={"/test"}
          price={"R$ 15.000 em prêmios e mentoria para desenvolvimento do projeto vencedor."}
        />
      </CardSection>
        <EventsFooter />
        <Footer />
      </div>
    )
  }


export default EventsPage;