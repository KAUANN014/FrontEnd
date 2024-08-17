const root = document.getElementById("root");

/*componentes de aplicacao*/

function Cabecalho(){
    const header = document.createElement("header")
    return header;
}

function Principal(){
    const main = document.createElement("main")
    return main;
}

function Rodape(){
    const main = document.createElement("footer")
    return footer;
}

function FormLogin(){
    const form= document.createElement("form");
    form.setAttribute

}
/*pagina de auto aplicacao*/

function Home() {
    root.append(Cabecalho())
    root.append(Principal())
    }

function Login() {
    const main = Principal();
    main.append(FormLogin())
    root.append(Cabecalho())
    root.append(Principal())
}

function  Perfil() {
    root.append(Cabecalho())
    root.append(Principal())
    }

Login();