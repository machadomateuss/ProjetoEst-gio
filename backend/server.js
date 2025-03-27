const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// conexão com o banco
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mateus20122003@",
  database: "cadastro"
});

// cadastro
app.post("/signup", (req, res) => {
  const { nome, email, senha } = req.body;

  const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      console.error("Erro ao cadastrar:", err);
      return res.status(500).json({ erro: "Erro ao cadastrar usuário." });
    }

    return res.status(200).json({ mensagem: "Usuário cadastrado com sucesso!" });
  });
});

// login
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  console.log("Tentativa de login:", { email, senha });

  const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
  db.query(sql, [email, senha], (err, result) => {
    if (err) {
      console.error("Erro ao consultar banco:", err);
      return res.status(500).json({ erro: "Erro ao consultar o banco de dados." });
    }

    console.log("Resultado da query:", result);

    if (result.length > 0) {
      return res.status(200).json({ mensagem: "Login realizado com sucesso!" });
    } else {
      return res.status(401).json({ erro: "Email ou senha incorretos." });
    }
  });
});

// servidor
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
