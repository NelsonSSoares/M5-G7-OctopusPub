import './App.css';

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>Página não encontrada</>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
