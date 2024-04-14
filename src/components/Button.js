// import "../styles/Button.css"

// Assets
// import ArrowIcon from "../assets/icons/ArrowIcon.png"

function Button({ className, children, ...rest }) {
  // if (buttonType == "register") {
  //   return (
  //     <a className="border-none px-4 py-2 border rounded-3xl cursor-pointer text-base outline-none no-underline bg-gray-950 text-gray-50 font-bold" href="/register" >Registrar-se</a>
  //   )
  // }
  // else if (buttonType == "login") {
  //   return (
  //     <a className="border-none px-4 py-2 border rounded-3xl cursor-pointer text-base outline-none no-underline bg-transparent text-gray-950 font-medium" href="/login">Entrar</a>
  //   )
  // }
  // else if (buttonType == "accordion") {
  //   return (
  //     <a className="border-solid px-4 py-2 rounded-3xl cursor-pointer text-base outline-none no-underline border-2 border-gray-200 flex w-fit gap-2"><img src={ArrowIcon} alt="Arrow" />Veja mais</a>
  //   )
  // }

  <a className={`border-none px-4 py-2 rounded-3xl cursor-pointer text-base outline-none no-underline ${className}`} {...rest}>
    {children}
  </a>

}

export default Button;