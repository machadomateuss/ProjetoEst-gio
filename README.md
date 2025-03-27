⚫ **Projeto Processo seletivo CapitalX | Vallorando**

Projeto que consiste em um sistema completo de autenticação e gerenciamento de produtos, utilizando React para o frontend, Node.js com Express para o backend e MySQL como banco de dados.

⚫ **Estrutura do Projeto**

ProjetoCapitalX/
├── backend/       # Código do servidor (Node.js + Express + MySQL)
├── frontend/      # Código da aplicação web (React)
└── README.md      # Documentação do projeto

⚫ **Como configurar e rodar o projeto.**

⚫​ **1. Pré-requisitos**

Antes de iniciar, se certificar de ter as seguintes ferramentas instaladas:

Node.js (versão mais recente)

MySQL

Git

GitHub Desktop (opcional, para gerenciar via interface gráfica)

⚫​ **2. Clonando o repositório**

git clone https://github.com/machadomateuss/ProjetoEst-gio.git
cd ProjetoEst-gio

⚫​ **Configuração do Backend**

⚫​ **Instalando dependências do backend**

cd backend
npm install

⚫​ **Configurando o Banco de Dados MySQL**

Abra o MySQL Workbench (ou outro gerenciador de banco de dados) e crie um banco chamado "cadastro".

Crie a tabela usuarios com o seguinte comando:

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

Configure as credenciais do MySQL no arquivo backend/server.js:

const db = mysql.createConnection({
    host: "localhost",
    user: "seu_usuario_mysql",
    password: "sua_senha_mysql",
    database: "cadastro"
});

⚫​ **Iniciando o servidor backend**

npm start

O servidor rodará em: http://localhost:3001 (terá um retorno confirmarndo "console.log("Servidor rodando na porta 3001");")

⚫ **Configuração do Frontend**

⚫​ **Instalando dependências do frontend**

cd ../frontend
npm install

⚫​ **Configurando a conexão com o backend**

No arquivo frontend/src/Login.js e frontend/src/Signup.js, conferir se as requisições estão apontando para http://localhost:3001.

⚫​ **Iniciando o frontend**

npm start

A aplicação estará disponível em http://localhost:3000 (se não aparecer, testar "http://localhost:3002")

⚫​ **Testando a Aplicação**

Criar Conta:

Acesse http://localhost:3000/signup.

Preencha os campos e clique em "Criar Conta".

O usuário será cadastrado no banco de dados.

Login:

Acesse http://localhost:3000/. ( ou "http://localhost:3002")

Insira o e-mail e senha cadastrados.

Após login, o usuário será redirecionado para a Home.

Importação de Produtos:

Clique no botão "Importar Produtos" na tela Home.

A API FakeStore será acessada e os produtos aparecerão em formato de lista na tela.

Exportação de CSV:

Clique no botão "Exportar para CSV" para baixar um arquivo com os produtos importados.

⚫​ **Observações**

Se houver erro de porta ocupada, finalize os processos do Node.js:

npx kill-port 3000 3001

Caso tenha problemas de autenticação com MySQL, tente o seguinte comando no MySQL Workbench:

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha';
FLUSH PRIVILEGES;

