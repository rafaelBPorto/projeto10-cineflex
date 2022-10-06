export default function Filme({idFilme, titulo, capa, descricao}){
  
    return(
        <div>
            <div>Filme {idFilme}: Titulo {titulo} </div>
            <img src={capa}/>
            <div>{descricao}</div>
        </div>
    
    )
}