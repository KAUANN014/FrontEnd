function Link (props){
const aoClicar = (e) =>{
    e.preventDefault();
    props.navegarPara(e.target.getAttribute("href"))
}

return(
<a href="props.rota" onClick={aoClicar}>{props.texto}</a>

)

}

export default Link;