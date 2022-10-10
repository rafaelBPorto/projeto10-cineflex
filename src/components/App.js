import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/css/GlobalStyle";
import Assentos from "./Assentos";
import Emcartaz from "./EmCartaz";
import Filme from "./Filme";
import Header from "./Header";
import Sucesso from "./Sucesso";
// import Sessoes from "./Sessoes";


export default function App(){

    const [sessao, setSessao] = useState(null)
    const [id, setId] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [numeroAssentos, setNumeroAssentos]=useState([])

    return(
     
       <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Emcartaz />} />
                <Route path="/filme/:idFilme" element={<Filme />} />
                <Route path="/assentos/:idSessao" element={<Assentos 
                        sessao={sessao} 
                        setSessao={setSessao}
                        id={id}
                        setId={setId}
                        name={name}
                        setName={setName}
                        cpf={cpf}
                        setCpf={setCpf}
                        numeroAssentos={numeroAssentos}
                        setNumeroAssentos={setNumeroAssentos}
                        />} />
                <Route path="/sucesso" element={<Sucesso 
                    sessao={sessao} 
                    setSessao={setSessao}
                    id={id}
                    setId={setId}
                    name={name}
                    setName={setName}
                    cpf={cpf}
                    setCpf={setCpf}
                    numeroAssentos={numeroAssentos} />} 
                    setNumeroAssentos={setNumeroAssentos}/>
            </Routes>
       </BrowserRouter>
    )
}