import './App.css';

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Pedidos from "./components/Pedidos/Pedidos";
import Bebidas from "./components/Bebidas/Bebidas";
import Comidas from "./components/Comidas/Comidas";
import FuncionariosCadastro from "./components/FuncionariosCadastro/FuncionariosCadastro";
import Login from "./components/FuncionariosLogin/FuncionariosLogin";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/comidas" element={<Comidas />} />
          <Route path="/cadastro" element={<FuncionariosCadastro />} />
          <Route exact path="/login" element={<Login />}  />
          <Route path="*" element={<>Página não encontrada</>} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
