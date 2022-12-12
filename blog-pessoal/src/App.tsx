import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './componetes/estaticos/footer/Footer';
import Home from './pages/home/Home';
import './App.css';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastrarUsuario';
import Navbar from './componetes/estaticos/navBar/NavBar';
import ListaTema from './componetes/temass/listaTema/ListaTema';
import ListaPostagem from './componetes/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './componetes/postagens/cadastroPost/CadastroPost';
import CadastroTema from './componetes/temass/cadatroTema/CadastroTema';
import DeletarPostagem from './componetes/postagens/deletarPostagem/Deletarpostagem';
import DeletarTema from './componetes/temass/deletarTema/DeletarTema';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>

          <Route path="/" element={<Login />} />



          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />


        </Routes>
      </div>
      <Footer />

    </Router>
  );
}

export default App;