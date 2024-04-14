// Components
import Image from "../../components/Image"
import PrimaryButton from "../../components/buttons/PrimaryButton"
import SecondaryButton from "../../components/buttons/SecondaryButton"

// Assets
import heroImage from "../../assets/Hero-Image.png"

function Hero() {
  return (
    <div className="flex mt-40 justify-between">
      <div className="flex flex-col justify-start w-6/12">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold leading-normal">Onde a inovação<br />encontra a execução!</h1>
          <p className="leading-relaxed text-gray-600">Capacite seus eventos de programação com facilidade e precisão.<br />CodePraesto é a sua solução completa para organizar e avaliar<br />competições de codificação, hackathons e desafios de programação.</p>
        </div>
        <div className="flex flex-row space-x-6 mt-8">
          <PrimaryButton>Registre-se</PrimaryButton>
          <SecondaryButton>Login</SecondaryButton>
        </div>
      </div>
      <div className="flex w-6/12 h-[28rem] justify-center">
        <Image src={heroImage} alt="hero image" />
      </div>
    </div>
  )
}

export default Hero;