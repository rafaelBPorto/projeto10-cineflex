import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import DadosCompra from "./DadosCompra"
import Lugar from "./Lugar"


export default function Assentos({ sessao, setSessao, id, setId, name, setName, cpf, setCpf, numeroAssentos, setNumeroAssentos }) {

    const { idSessao } = useParams()
    const URLsessao = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`


    useEffect(() => {
        const sessaoPromise = axios.get(URLsessao)
        sessaoPromise.then(r => {
            setSessao(r.data)

        })

    }, [URLsessao, setSessao])

    return (
        <div>
            {sessao === null ? (
                <div>Carregando...</div>
            ) : (
                <>
                    <ContainerAssentos>
                        <ContainerTitulo>Selecione o(s) assento(s)</ContainerTitulo>
                        {sessao.seats.map((assento) => {
                            return <Lugar key={assento.id} assento={assento} id={id} setId={setId} numeroAssentos={numeroAssentos} setNumeroAssentos={setNumeroAssentos} />
                        })}
                    </ContainerAssentos>

                    <ContainerLegenda>
                        <QuadroLegenda>
                            <Legenda corInterna="#1AAE9E" corMoldura="#0E7D71" />
                            <p>Selecionado</p>
                        </QuadroLegenda>
                        <QuadroLegenda>
                            <Legenda corInterna="#C3CFD9" corMoldura="#7B8B99" />
                            <p>Disponível</p>
                        </QuadroLegenda>
                        <QuadroLegenda>
                            <Legenda corInterna="#FBE192" corMoldura="#F7C52B" />
                            <p>Indisponível</p>
                        </QuadroLegenda>
                    </ContainerLegenda>

                    <DadosCompra name={name} setName={setName} cpf={cpf} setCpf={setCpf} id={id} />

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
const ContainerLegenda = styled.div`
    width:360px;
    margin: 0 auto;
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
    
`
const QuadroLegenda = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    width: 100%;
`
const Legenda = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background: ${props => props.corInterna};
    border: 1px solid ${props => props.corMoldura};
    border-radius: 12px;
`