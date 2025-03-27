import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './ValidacaoLogin';

function Login() {
  const [values, setValues] = useState({ email: '', senha: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some(err => err !== '');
    if (hasErrors) return;

    axios.post('http://localhost:3001/login', values)
      .then((res) => {
        alert(res.data.mensagem);
        navigate('/Home');
      })
      .catch((err) => {
        alert(err.response?.data?.erro || 'Erro ao fazer login');
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
      <div className='bg-white p-5 rounded shadow w-50'>
        <h2 className='text-center mb-4'>Entrar</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              name='email'
              id='email'
              className='form-control'
              placeholder='Digite seu Email'
              onChange={handleInput}
              required
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='senha'><strong>Senha</strong></label>
            <input
              type='password'
              name='senha'
              id='senha'
              className='form-control'
              placeholder='Digite sua Senha'
              onChange={handleInput}
              required
            />
            {errors.senha && <span className='text-danger'>{errors.senha}</span>}
          </div>
          <button
            className='w-100 py-2 fs-5 text-white border-0 rounded-3'
            style={{ backgroundColor: '#1e133a' }}
          >
            Entrar
          </button>
          <Link
            to='/signup'
            className='w-100 py-2 fs-5 text-white text-center d-block border-0 rounded-3 mt-3 text-decoration-none'
            style={{ backgroundColor: '#1e133a' }}
          >
            Criar Conta
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
