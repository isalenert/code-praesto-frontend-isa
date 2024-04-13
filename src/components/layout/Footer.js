// assets
import Logo from "../../assets/Logo.png"

// stylesheets
import "../../styles/Footer.css"

function Footer() {
  return (
    <footer>
      <div className="Title">
        <img src={Logo} alt="Logo" />
        <h1>CodePraesto</h1>
      </div>
      <div className="Events">
        <p>Eventos</p>
        <ul>
          <li><a target="_blank" href="">Eventos</a></li>
          <li><a target="_blank" href="">Populares</a></li>
          <li><a target="_blank" href="">Organize</a></li>
        </ul>
      </div>
      <div className="Documentation">
        <p>Documetação</p>
        <ul>
          <li><a target="_blank" href="https://github.com/until99/code-praesto-frontend">Github</a></li>
          <li><a target="_blank" href="https://github.com/until99/code-praesto-frontend/wiki">Documents</a></li>
          <li><a target="_blank" href="">API</a></li>
        </ul>
      </div>
      <div className="Contact">
        <p>Contato</p>
        <ul>
          <li><a target="_blank" href="">Time</a></li>
          <li><a target="_blank" href="">Blog</a></li>
          <li><a target="_blank" href="">Contate-nos</a></li>
          <li><a target="_blank" href="">Termos · Privacidade</a></li>
        </ul>
      </div>
    </footer>

  )
}

export default Footer;