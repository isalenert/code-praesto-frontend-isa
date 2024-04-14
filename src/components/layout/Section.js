// Assets
import sectionImage2 from "../../assets/Section-Image-2.png"
import sectionImage3 from "../../assets/Section-Image-3.png"

function Section({section}) {
  if (section == "participate") {
    return (
      <div className="flex space-between mt-40">
        <div className="flex flex-col space-between w-6/12 justify-end">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold leading-normal">Participe de Hackatons<br />com CodePraesto</h1>
            <p className="leading-relaxed text-gray-600">CodePraesto te possibilita inúmeras oportunidades para ganhar<br />experiência e se divertir participando dos mais variados Hackatons<br />das mais diversas comunidades!</p>
          </div>
        </div>
        <div className="flex w-6/12 h-[28rem] justify-center">
          <img src={sectionImage2} alt="hero image" />
        </div>
      </div>
    )
  }
  else if (section == "oraganize") {
    return (
      <div className="flex space-between mt-40">
        <div  className="flex flex-col space-between w-6/12 justify-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold leading-normal">Organize seu próprio<br />Hackaton com CodePraesto</h1>
            <p className="leading-relaxed text-gray-600">Com o CodePraesto você se tem os recursos necessários para<br />construir seu próprio evento na sua comunidade.</p>
          </div>
        </div>
        <div className="flex w-6/12 h-[28rem] justify-center">
          <img src={sectionImage3} alt="hero image" />
        </div>
      </div>
    )
  }
}

export default Section;