// Components
import Image from "../../components/images/Image"
import PrimaryButton from "../../components/buttons/PrimaryButton"

// Assets
import EventsImage from "../../assets/Events-Image.png"

function EventsList() {
  return (
    <div className="flex mt-40 justify-between">
      <div className="flex flex-col justify-start w-6/12">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold leading-normal">Eventos<br /></h1>
          <p className="leading-relaxed text-gray-600">Aumente suas habilidades e crie conexões valiosas exercitando sua mente com competições e eventos.<br /></p>
        </div>
        <div className="flex flex-row space-x-6 mt-8">
          <PrimaryButton>Organize um evento</PrimaryButton>
        </div>
      </div>
      <div className="flex w-6/12 h-[28rem] justify-center">
        <Image src={EventsImage} alt="events image" />
      </div>
    </div>
  )
}

export default EventsList;