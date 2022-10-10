import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Sucesso({ sessao, setSessao, id, setId, name, setName, cpf, setCpf, numeroAssentos, setNumeroAssentos }) {
    const navigate = useNavigate()
    const numeroLugar = [...numeroAssentos]

    function voltarEmcartaz() {
        setNumeroAssentos([])
        setSessao(null)
        setId([])
        setName("")
        setCpf("")
        navigate("/")
    }
    return (

        <ContainerSucesso>
            <h1>Pedido feito<br />com sucesso!</h1>
            <h2>Filme e sessão</h2>
            <p>{sessao.movie.title}</p>
            <p>{sessao.day.date} {sessao.name}</p>

            <h2>Comprador</h2>
            <p>Nome: {name}</p>
            <p>Cpf: {cpf}</p>
            <h2>Ingressos</h2>

            {numeroLugar.map((n, index) => {
                return (
                    <p key={index}>
                        Assento: {n}
                    </p>
                )
            })}
            <BotaoRetonar onClick={voltarEmcartaz}>Voltar pra Home</BotaoRetonar>
        </ContainerSucesso>
    )
}

const ContainerSucesso = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content:space-around;
    max-width: 375px;
    margin: 0 auto;
    h1{
        width: 374px;
        height: 110px;
        font-weight: 700;
        font-size: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
        align-items: center;
        text-align: center;
        color: #247A6B;
        
    }

    h2{
        width: 374px;
        font-weight: 700;
        font-size: 24px;
        display: flex;
        color: #293845;
        margin: 5px;
        margin-top: 20px;
        margin-bottom:10px;

    }

    p{
        margin: 5px;
    }
`

const BotaoRetonar = styled.button`
    width: 225px;
    height: 42px;
    margin: 30px auto;
    

    background: #E8833A;
    border-radius: 3px;
    border: none;

    font-weight: 400;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
`