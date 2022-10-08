import styled from "styled-components"

export default function Header() {
    return (
        <MarginHeader>
            <ContainerHeader>
                CINEFLEX
            </ContainerHeader>
        </MarginHeader>
    )
}

const MarginHeader =styled.div`
        height: 80px;
        width: 100%;

`
const ContainerHeader = styled.div`
    position: fixed;
    width: 100%;
    height: 67px;
    left: 0px;
    top: 0px;
    background: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 4.5vh;
    color: #e8833a;
`