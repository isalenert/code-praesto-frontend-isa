// Components
import InputWTlupa from "../inputs/InputWTlupa";
import PrimaryButton from "../../components/buttons/PrimaryButton"
import SecondaryButton from "../buttons/SecondaryButton"


function Register() {
  return (
    <div className="flex mt-40 justify-between">
      <div className="flex flex-col justify-start w-6/12 flex-1">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold leading-normal">Registre-se<br /></h1>
          <p className="leading-relaxed text-gray-600">Registre-se na plataforma para acessar as funcionalidades e participar dos eventos!<br /></p>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-3">
            <InputWTlupa placeholder={"e-mail"} />
            <InputWTlupa placeholder={"username"} />
            <InputWTlupa placeholder={"password"} /> 
            <div className="flex flex-cow space-x-6 mt-8">
             <SecondaryButton href="/login">Login</SecondaryButton>
            <PrimaryButton href="/register">Registre-se</PrimaryButton> 
        </div>    
      </div>

    </div>
  )
}

export default Register;