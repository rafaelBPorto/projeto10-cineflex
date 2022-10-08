import { useParams } from "react-router-dom"


export default function Sessoes(){
    const {idSessao} = useParams
    
    return(
        <div>
            Sessão {idSessao}
        </div>
    )
}