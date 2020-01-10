const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

module.exports = (req, res, next) => {
  const array = document.getElementById("name").value;
  if (user.indexOf(array) > -1) {
    console.log("ENCONTROU");
    next();
  } else {
    console.log("NADA ENCONTRADO");
  }
};

const user = [
  { name: "Lucas", password: "123098" },
  { name: "Carlos", password: "852963" },
  { name: "Antonio", password: "key01key" },
  { name: "Acer", password: "senhafraca123" }
];

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //Gera a chave token
  const token = jwt.sign(
    { username: username, password: password },
    "chavetoken"
  );

  res.json({ token: token });
});

app.post("/create-users", (req, res) => {
  const token = req.body.token;
  const decoded = jwt.verify(token, "chavetoken");

  console.log('decoed: ', decoded)

  if(decoded) {
    // cria usuário
    res.status(200).json({
      message: 'Usuário criado.'
    });
  } else {
    res.status(401).json({
      message: 'Não autorizado.'
    });
  }
});

app.listen(9909, () => {
  console.log("Servidor funcionando na porta 9909!");
});
