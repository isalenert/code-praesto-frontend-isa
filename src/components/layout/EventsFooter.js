// Components
import PrimaryButton from "../../components/buttons/PrimaryButton";

function EventsFooter() {
    return (
      <div className="flex mt-40 container justify-center">
        <div className="flex flex-col justify-start w-6/12 flex-1">
          <div className="flex flex-col space-x-6 mt-8 items-center">
            <h1 className="text-5xl text-center font-bold leading-normal">Não achou o que estava procurando?<br /></h1>
          </div>
          <div className="flex flex-row justify-center space-x-6 mt-8">
            <PrimaryButton>Explore todos os Eventos</PrimaryButton>
          </div>
        </div>
      </div>
    );
  }
  

export default EventsFooter;
