import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Lugar from "./Lugar"


export default function Assentos() {
    const [sessao, setSessao] = useState(null)
    const lugaresSelecionados = {id: [], name:"", cpf:""}

    const { idSessao } = useParams()
    const URLsessao = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`

    useEffect(() => {
        const sessaoPromise = axios.get(URLsessao)
        sessaoPromise.then(r => {
            setSessao(r.data)

        })

    }, [URLsessao])

    return (
        <>
            {sessao === null ? (
                <div>Carregando...</div>
            ) : (
                <>
                    <div>Filme: {sessao.movie.title}</div>
                    <div>Dia: {sessao.day.weekday} - {sessao.day.date}</div>
                    <div>Horário: {sessao.name}</div>
                    <div>Assentos</div>
                    <ContainerAssentos>
                        
                        {sessao.seats.map((assento) => {
                            return <Lugar key={assento.id} assento={assento} lugaresSelecionados={lugaresSelecionados.id}/>
                        })}
                    </ContainerAssentos>
                </>
            )}
        </>

    )
}

const ContainerAssentos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    gap: 7px;
    padding: 20px;
    width: 365px;
    margin: 0 auto;
    box-sizing: border-box;

    `
