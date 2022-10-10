import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import carregando from "../assets/img/carregando.gif"


export default function Filme() {

    const [filme, setFilme] = useState({})
    const [sessoes, setSessoes] = useState(null)
    const [erro, setErro] = useState("Carregando...")
    const { idFilme } = useParams()
    const URLfilme = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`

    useEffect(() => {
        const filmePromise = axios.get(URLfilme)

        filmePromise.then(r => {
            setFilme(r.data)
            setSessoes(r.data.days)
        })

        filmePromise.catch(err => { setErro(err.message) })

    }, [URLfilme])

    return (
        <>

            {sessoes !== null ? (
                <>
                    <ContainerSessoes>
                        <h1>Selecione o horário</h1>
                        {sessoes.map((s) => {
                            return (
                                <ContainerSessao key={s.id}>
                                    <p>
                                        {s.weekday} - {s.date}
                                    </p>
                                    <ContainerHorarios>
                                        {s.showtimes.map((st) => {
                                            return <Link key={st.id} to={`/assentos/${st.id}`}> <button>{st.name}</button> </Link>
                                        })}
                                    </ContainerHorarios>
                                </ContainerSessao>
                            )
                        })}
                    </ContainerSessoes>
                    <ContainerFooter>
                        <ContainerMolduraFilme>
                            <img src={filme.posterURL} alt={filme.title} />
                        </ContainerMolduraFilme>
                        <h1>{filme.title}</h1>
                    </ContainerFooter>

                </>
            ) : (
                <ContainaerCarregando>
                <img src={carregando}  alt="carregando.."/>
                <div>{erro}</div>
                </ContainaerCarregando>
            )}

        </>
    )

}

const ContainerSessoes = styled.div`
    margin: 0 auto;
    max-width: 375px; 
    display: flex;
    flex-direction: column;
    padding: 20px;
    h1{
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 24px;    
    }   
`

const ContainerSessao = styled.div`
    display: flex;
    flex-direction: column;
    color: #293845;

    p{
        font-weight: 400;
        font-size: 20px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
`

const ContainerHorarios = styled.div`
    display: flex;
    gap: 8px;

    button{
        width: 83px;
        height: 43px;

        background: #E8833A;
        border-radius: 3px;
        border: none;


        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        justify-content: center;
        align-items:center; 

        color: #FFFFFF;
    }


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
const ContainaerCarregando = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    img{
        width:100px
    }
`



