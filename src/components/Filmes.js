import axios from "axios"
import { useEffect, useState } from "react"
import listaFilmes from "../mocks/ListaFilmes"
import Filme from "./Filme"


export default function Filmes() {
    const URLListaFilmes = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    const [filmes, setFilmes] = useState([])


    useEffect(() => {
        const promise = axios.get(URLListaFilmes)
        promise.then(resposta =>{
            console.log(resposta.data)
            setFilmes(resposta.data)
        })
    }, [])


    return (
        <div>


            {filmes.map((l, i) =>
                <div key={i}>
                    <div>Filme {l.id}: Titulo {l.title} </div>
                    <img src={l.posterURL} />
                    <div>{l.overview}</div>
                </div>
            )}
        </div>
    )
}

{/* {listaFilmes.map((l, i)=><Filme 
            key={i} 
            idFilme={l.id} 
            titulo ={l.title} 
            capa={l.posterURL}
            descricao={l.overview}
            />)} */}