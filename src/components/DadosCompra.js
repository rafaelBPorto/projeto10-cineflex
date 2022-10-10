import styled from "styled-components"

export default function DadosCompra({ name, setName, cpf, setCpf }) {
    console.log(name)
    console.log(cpf)
    return (
        <ContainerForm>
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
        </ContainerForm>
    )
}

const ContainerForm = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    input{
        width: 327px;
        height: 30px;
        
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
`