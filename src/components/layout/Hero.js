// Components
import Button from "../../components/Button"
import Image from "../../components/Image"

// Assets
import heroImage from "../../assets/Hero-Image.png"
import sectionImage from "../../assets/Section-Image-2.png"

// Stylesheets
import "../../styles/Hero.css"

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-title-wrapper">
          <h1>Onde a inovação<br />encontra a execução!</h1>
          <p>Capacite seus eventos de programação com facilidade e precisão.<br />CodePraesto é a sua solução completa para organizar e avaliar<br />competições de codificação, hackathons e desafios de programação.</p>
        </div>
        <div className="hero-button-wrapper">
          <Button buttonType="register" />
          <Button buttonType="login" />
        </div>
      </div>
      <div className="image-wrapper">
        <Image src={heroImage} alt="hero image" />
      </div>
    </div>
  )
}

export default Hero;