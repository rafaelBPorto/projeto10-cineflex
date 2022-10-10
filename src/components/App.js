import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/css/GlobalStyle";
import Assentos from "./Assentos";
import Emcartaz from "./EmCartaz";
import Filme from "./Filme";
import Header from "./Header";
// import Sessoes from "./Sessoes";


export default function App(){
    return(
     
       <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Emcartaz />} />
                <Route path="/filme/:idFilme" element={<Filme />} />
                <Route path="/assentos/:idSessao" element={<Assentos/>} />
                {/* <Route path="/sessoes/:idFilme" element={} /> */}
            </Routes>
       </BrowserRouter>
    )
}