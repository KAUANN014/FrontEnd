import BotaoSubmit from"../components/BotaoSubmit"
import InputSenha from "../components/InputSenha"
import InputUsuario from "../components/InputUsuario"
import Link from "../components/Link"
import Titulo from "../components/Titulo"
import Logo from "../components/Logo"
import Rodape from"../components/Rodape"
import "./Login.css";
    

function Login() {
    const urlLogo = "https://www.svgrepo.com/show/489120/school.svg"
    const textoLogo ="Logo da Aplicação"
    return(
        <>
        <main className="login-form">
            <Logo/>
            <Titulo texto="Aluno Online"/>
            <InputSenha/>
            <InputUsuario/>
            <BotaoSubmit texto ="Entrar"/>
            <Link texto="Esqueceu a Senha"/>
            <Link texto="Criar uma Conta"/>

        </main>
        <Rodape/>
        </>
    )
}

export default Login;