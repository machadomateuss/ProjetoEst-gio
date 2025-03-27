import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Validation from './ValidacaoSignup';

function Signup() {
  const [values, setValues] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some(err => err !== '');
    if (hasErrors) return;

    axios.post('http://localhost:3001/signup', values)
      .then(res => {
        alert(res.data.mensagem);
      })
      .catch(err => {
        console.error('Erro ao cadastrar:', err);
        alert('Erro ao cadastrar usuário.');
      });

    console.log('Valores enviados:', values);
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
      <div className='bg-white p-5 rounded shadow w-50'>
        <h2 className='text-center mb-4'>Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='nome'>
              <strong>Nome Completo</strong>
            </label>
            <input
              type='text'
              placeholder='Digite seu Nome'
              className='form-control rounded-3'
              id='nome'
              name='nome'
              onChange={handleInput}
            />
            {errors.nome && <span className='text-danger'> {errors.nome} </span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Digite seu Email'
              className='form-control rounded-3'
              id='email'
              name='email'
              onChange={handleInput}
            />
            {errors.email && <span className='text-danger'> {errors.email} </span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='senha'>
              <strong>Senha</strong>
            </label>
            <input
              type='password'
              placeholder='Digite sua Senha'
              className='form-control rounded-3'
              id='senha'
              name='senha'
              onChange={handleInput}
            />
            {errors.senha && <span className='text-danger'> {errors.senha} </span>}
          </div>

          <button
            type='submit'
            className='w-100 py-2 fs-5 text-white border-0 rounded-3 mb-3'
            style={{ backgroundColor: '#4b5282' }} // mais claro
          >
            <strong>Criar Conta</strong>
          </button>

          <Link
            to='/'
            className='w-100 py-2 fs-5 text-white text-center d-block border-0 rounded-3 text-decoration-none'
            style={{ backgroundColor: '#1e133a' }}
          >
            Login
          </Link>

          <p className='text-center mt-3'>
            Você está de acordo com nossas políticas e termos.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
