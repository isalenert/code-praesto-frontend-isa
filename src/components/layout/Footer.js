// assets
import Logo from "../../assets/Logo.png"

// stylesheets
// import "../../styles/Footer.css"

function Footer() {
  return (
    <footer className="flex flex-row justify-between align-top mt-40 mb-10">
      <a className="flex items-start gap-4" href="/"><img src={Logo} alt="Logo" />
        <h1 className="text-5xl font-bold">CodePraesto</h1>
      </a>
      <div className="Events">
        <p className="font-bold mb-3">Eventos</p>
        <ul className="flex flex-col space-y-3">
          <li><a className="text-gray-600 hover:underline" target="_blank" href="/events">Eventos</a></li>
          <li><a className="text-gray-600 hover:underline" target="_blank" href="/popular">Populares</a></li>
          <li><a className="text-gray-600 hover:underline" target="_blank" href="/host">Organize</a></li>
        </ul>
      </div>
      <div className="Documentation">
        <p className="font-bold mb-3">Documetação</p>
        <ul className="flex flex-col space-y-3">
          <li><a className="text-gray-600 hover:underline" target="_blank" href="https://github.com/until99/code-praesto-frontend">Github</a></li>
          <li><a className="text-gray-600 hover:underline" target="_blank" href="https://github.com/until99/code-praesto-frontend/wiki">Documents</a></li>
          <li><a className="text-gray-600 hover:underline" target="_blank" href="https://github.com/until99/code-praesto-frontend/wiki/API">API</a></li>
        </ul>
      </div>
      <div className="Contact">
        <p className="font-bold mb-3">Contato</p>
        <ul className="flex flex-col space-y-3">
          <li><a className="text-gray-600 hover:underline" target="_blank" href="">Time</a></li>
          <li><a className="text-gray-600 hover:underline" target="_blank" href="">Blog</a></li>
          <li><a className="text-gray-600 hover:underline" target="_blank" href="https://discord.gg/6AGrwgj7Zp">Contate-nos</a></li>
          <li><a className="text-gray-600 hover:underline" target="_blank" href="">Termos · Privacidade</a></li>
        </ul>
      </div>
    </footer>

  )
}

export default Footer;