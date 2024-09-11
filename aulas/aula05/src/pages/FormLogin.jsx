import {useState} from "react";
import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail"
import InputSenha from "../components/InputSenha"

function FormLogin(props) {
    const [email, SetEmail] = useState();
    const [senha, SetSenha] = useState();

 const efetuaLogin = (e) =>{
    e.preventDefault();
   props.navegaPara("/home");
 }

return(
<form  onSubmit={efetuaLogin}>
    <InputEmail texto="Email" valor={email} mudaValor={SetEmail}/>
    <InputSenha texto="Senha" valor={senha} mudaValor={SetSenha}/>
    <Botao texto="Entrar" />

</form>


)
    
}

export default FormLogin;