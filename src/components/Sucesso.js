export default function Sucesso({ sessao, setSessao, id, setId, name, setName, cpf, setCpf, numeroAssentos}){
    
    return(
        
        <div>
            <p>Filme: {sessao.movie.title}</p>
            <p>Sessão: {sessao.day.date} - {sessao.name}</p>
            
            <h1>Comprador</h1>
            <p>Nome: {name}</p> 
            <h1>Ingresso:</h1>
             {numeroAssentos.map((n, index)=>{
                return(
                <div key={index}>
                    Assento: {n}
                </div>
             )})} 
        </div>
    )
}