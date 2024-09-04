import style from './Logo.css';

function Logo(){
    const url ="https://www.svgrepo.com/show/489120/school.svg";
    const texto = "Logo da Aplicacao"
    return (
        <img classNamesrc= "logo" src={props.imagem} alt={props.texto}/>
    );
}

export default Logo; 