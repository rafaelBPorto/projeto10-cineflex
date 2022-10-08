import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"


export default function EmCartaz() {
    const URLlistaFilmes = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    const [filmes, setFilmes] = useState([])
    

    useEffect(() => {
        const promise = axios.get(URLlistaFilmes)
        promise.then(resposta => {
            setFilmes(resposta.data)
        })
    }, [])

    
    return (

        <ContainerFilmes>
            <ContainerTitulo> Selecione o Fimlme</ContainerTitulo>
            {filmes.map((filme, index) =>
                <Link to={`/filme/${filme.id}`} key={index}>
                    <ContainerMoldura >
                        <img src={filme.posterURL} alt={filme.name} />
                    </ContainerMoldura>
                </Link>

            )}
        </ContainerFilmes>
    )
}

const ContainerFilmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    max-width: 375px;
    margin: 0 auto;
    /* margin-top: 70px; */


    img{    
        width: 129px;
    }

`

const ContainerMoldura = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 145px;
    height: 209px;
    left: 30px;
    top: 169px;

    margin: 3px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
`

const ContainerTitulo = styled.div`
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 24px;
`