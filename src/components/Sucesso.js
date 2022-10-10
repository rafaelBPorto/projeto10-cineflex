export default function Sucesso({ sessao, setSessao, id, setId, name, setName, cpf, setCpf, numeroAssentos}){
    return(
        <div>
            {name} - {cpf} - {numeroAssentos}
        </div>
    )
}