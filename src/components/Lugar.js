import { useState } from "react"
import styled from "styled-components"

export default function Lugar({ assento, id, setId}) {

    const lugaresSelecionados = id
    const [selecionado, setSelecionado] = useState(false)
    const [Interna, setInterna] = useState("#C3CFD9")
    const [Moldura, setMoldura] = useState("#7B8B99")
    function estadoAssento() {

        const novoEstado = !selecionado
        setSelecionado(novoEstado)
        if (novoEstado) {
            lugaresSelecionados.push(assento.name)
            setId(lugaresSelecionados)
            setInterna("#1AAE9E")
            setMoldura("#0E7D71")
        } else {
            const posicao = lugaresSelecionados.indexOf(assento.name)
            lugaresSelecionados.splice(posicao, 1)
            setId(lugaresSelecionados)
            setInterna("#C3CFD9")
            setMoldura("#7B8B99")      
        }

        console.log(lugaresSelecionados)

    }

    return (
        <>
            {assento.isAvailable ? (
                <ContainerLugar onClick={estadoAssento} key={assento.id}
                    corInterna={Interna}
                    corMoldura={Moldura}
                >
                    {assento.name}
                </ContainerLugar>
            ) : (
                <ContainerLugar key={assento.id}
                    corInterna="#FBE192"
                    corMoldura="#F7C52B"
                >
                    {assento.name}
                </ContainerLugar>
            )}
        </>
    )
}

const ContainerLugar = styled.button`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background: ${props => props.corInterna};
    border: 1px solid ${props => props.corMoldura};
    border-radius: 12px;
`
