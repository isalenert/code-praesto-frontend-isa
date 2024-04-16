import TeslaLogo from "../../assets/bussines-logo.png";

function CardMin() {
  return (
    <div className="w-[500px] border-solid border-2 border-gray-200 p-6 rounded-2xl mt-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col space-y-1">
          <p className="font-bold text-xl">HackTech 2024</p>
          <p className="font-medium text-base">Tech Innovations Ltda.</p>
        </div>
        <div className="w-6/12 flex justify-end">
          <img src={TeslaLogo} />
        </div>
      </div>
      <div className="flex flex-col space-y-2 mt-6 text-gray-900">
        <div className="flex flex-row justify-between">
          <p className="text-sm font-medium">10 de abril - 12 de abril</p>
          <p className="text-sm font-medium"><strong>200</strong> participantes</p>
        </div>
        <p className="text-sm font-medium line-clamp-3 text-justify ">Desafio de programação de 48 horas para criar soluções inovadoras usando tecnologias de ponta.</p>
        <p className="text-sm font-bold">U$ 10.000,00</p>
      </div>
    </div>
  )
}

export default CardMin;