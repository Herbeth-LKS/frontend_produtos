import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import './LoginForm.css'; // Importe o arquivo CSS

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Adicione esta linha

  // Função para lidar com a alteração dos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fazer solicitação HTTP para o backend Laravel
      const response = await axios.post('http://127.0.0.1:8000/login', formData);
      // Se o login for bem-sucedido, você pode redirecionar o usuário ou fazer outras ações, como armazenar o token de autenticação
      console.log('Login bem-sucedido!', response.data);
      setError(''); // Limpar mensagem de erro
      navigate('/products'); // Redirecionar para ProductList
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Usuário ou senha incorretos. Por favor, tente novamente.');
      } else {
        setError('Erro ao fazer login. Por favor, tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className="form-container"> {/* Adicione a classe CSS aqui */}
      <h2>Formulário de Login</h2>
      {error && <div className="error-message">{error}</div>} {/* Mostrar mensagem de erro, se houver */}
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* Adicione a classe CSS aqui */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group"> {/* Adicione a classe CSS aqui */}
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
