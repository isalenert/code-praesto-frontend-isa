import "../styles/Button.css"

function Button({ buttonType }) {
  if (buttonType == "register") {
    return (
      <a className="button register" href="/register" >Registrar-se</a>
    )
  }
  else if (buttonType == "login") {
    return (
      <a className="button login" href="/login">Entrar</a>
    )
  }
  else if (buttonType == "accordion") {
    return (
      <a className="button accordion">Veja mais</a>
    )
  }

}

export default Button;