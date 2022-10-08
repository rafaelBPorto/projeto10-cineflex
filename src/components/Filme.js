import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"


export default function Filme() {
    const { idFilme } = useParams()
    const [filme, setFilme] = useState({})
    const [sessoes, setSessoes] = useState(null)
    const URLfilme = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`

    useEffect(() => {
        const filmePromise = axios.get(URLfilme)
        filmePromise.then(r => {
            setFilme(r.data)
            setSessoes(r.data.days)
        })
    },[])

    return (
        <ContainerSessoes>
            <ContainerTitulo>Selecione o horário</ContainerTitulo>
            {sessoes !== null && (
                <>
                    {sessoes.map((s) => {
                        return (
                            <div key={s.id}>
                                <ContainerSessao >  
                                    Sessão: {s.weekday} - Data: {s.date}
                                </ContainerSessao>
                                {s.showtimes.map((st) => {
                                    return <span key={st.id}>{st.name} </span>
                                })}
                            </div>
                        )
                    })}
                </>
            )}
        </ContainerSessoes>
    )

}

const ContainerSessoes = styled.div`
    margin: 0 auto;
    max-width: 375px;    
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
const ContainerSessao = styled.div`
        height: 35px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #293845;
`