import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function DadosCompra({ name, setName, cpf, setCpf, id }) {
    const navigate = useNavigate()



    const urlCompra = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"

    const obj = { ids: id, name, cpf }


    function realizarCompra(e) {
        e.preventDefault()

        const enviarPedido = axios.post(urlCompra, obj)

        enviarPedido.then(() => {
            navigate("/sucesso")
        })
    }


    return (
        <ContainerForm  onSubmit={realizarCompra}>
            <div>
                <div>
                    <label htmlFor="name">Nome do Comprador:</label>
                </div>
                <input
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    required
                />
            </div>
            <div>
                <div>
                    <label htmlFor="cpf">Cpf do Comprador:</label>
                </div>
                <input
                    id="cpf"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    type="text"
                    required
                />
            </div>
            <button type="submit">Reservar assento(s)</button>
        </ContainerForm>
    )
}

const ContainerForm = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    input{
        width: 327px;
        height: 30px;
        
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

    button{

        margin-top: 30px;
        width: 225px;
        height: 42px;

        background: #E8833A;
        border-radius: 3px;
        border: none;

        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;

        color: #FFFFFF;
    }
`