// Assets
import sectionImage2 from "../assets/Section-Image-2.png"
import sectionImage3 from "../assets/Section-Image-3.png"

// Stylesheets
import "../styles/Section.css"

function Section({section}) {
  if (section == "participate") {
    return (
      <div className="section">
        <div className="content-wrapper">
          <div className="title-wrapper">
            <h1>Participe de Hackatons<br />com CodePraesto</h1>
            <p>CodePraesto te possibilita inúmeras oportunidades para ganhar<br />experiência e se divertir participando dos mais variados Hackatons<br />das mais diversas comunidades!</p>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={sectionImage2} alt="hero image" />
        </div>
      </div>
    )
  }
  else if (section == "oraganize") {
    return (
      <div style={{ alignItems: 'end' }} className="section">
        <div className="content-wrapper">
          <div className="title-wrapper">
            <h1>Organize seu próprio<br />Hackaton com CodePraesto</h1>
            <p>Com o CodePraesto você se tem os recursos necessários para<br />construir seu próprio evento na sua comunidade.</p>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={sectionImage3} alt="hero image" />
        </div>
      </div>
    )
  }
}

export default Section;