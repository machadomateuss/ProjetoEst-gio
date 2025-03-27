function Validation(values) {
    let error = {};
  
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const senha_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.email === '') {
      error.email = 'Email não pode estar vazio';
    } else if (!email_pattern.test(values.email)) {
      error.email = 'Email inválido';
    } else {
      error.email = '';
    }
  
    if (values.senha === '') {
      error.senha = 'Senha não pode estar vazia';
    } else if (!senha_pattern.test(values.senha)) {
      error.senha = 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula e um número';
    } else {
      error.senha = '';
    }
  
    return error;
  }
  
  export default Validation;