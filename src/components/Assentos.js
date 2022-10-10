import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import DadosCompra from "./DadosCompra"
import Lugar from "./Lugar"


export default function Assentos() {
    const [sessao, setSessao] = useState(null)
    const [id, setId] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    const { idSessao } = useParams()
    const URLsessao = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`


    useEffect(() => {
        const sessaoPromise = axios.get(URLsessao)
        sessaoPromise.then(r => {
            setSessao(r.data)

        })

    }, [URLsessao])

    return (
        <div>
            {sessao === null ? (
                <div>Carregando...</div>
            ) : (
                <>
                    <ContainerAssentos>
                        <ContainerTitulo>Selecione o(s) assento(s)</ContainerTitulo>
                        {sessao.seats.map((assento) => {
                            return <Lugar key={assento.id} assento={assento} id={id} setId={setId}/>
                        })}
                    </ContainerAssentos>
                    
                    <DadosCompra name={name} setName={setName} cpf={cpf} setCpf={setCpf} id={id}/>

                    <ContainerFooter>
                        <ContainerMolduraFilme>
                            <img src={sessao.movie.posterURL} alt={sessao.movie.title} />
                        </ContainerMolduraFilme>
                        <h1>{sessao.movie.title}
                            <span>
                                <h1>{sessao.day.weekday} - {sessao.day.date}</h1>
                            </span>
                        </h1>
                    </ContainerFooter>
                </>
            )}
        </div>

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
const ContainerTitulo = styled.div`
width: 100%;
height: 110px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 400;
font-size: 24px;
`
const ContainerFooter = styled.div`
    position: fixed; 
    bottom: 0px;   
    left: 0px;
    width: 100%;
    height: 117px;
    padding: 14px;
    

    background: #DFE6ED;
    display:flex;
    align-items: center;



    h1{
        font-weight: 400;
        margin-left: 16px;

    }

`
const ContainerMolduraFilme = styled.div`
    width: 64px;
    height: 89px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 48px;
        height: 72px;
    }

    h1{
        font-weight: 400;
    }
`