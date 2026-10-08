// ============================================================
//  CONVERSOR  -  Conversao e Validacao de Tipos
//  Backend 2DAT2  -  3o Trimestre
//  O frontend ja esta pronto em public/. Complete o TODO.
// ============================================================

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

// Recebe { preco, quantidade } vindos do formulario (chegam como TEXTO).
app.post("/calcular", (req, res) => {
  // TODO 1: converta req.body.preco para numero com Number(...)
  // TODO 2: converta req.body.quantidade para inteiro com parseInt(...)
  // TODO 3: se algum for NaN, responda 400 com { erro: "Digite numeros validos" }
  // TODO 4: calcule total = preco * quantidade
  // TODO 5: responda 200 com { preco, quantidade, total }
});

app.listen(PORT, () => {
  console.log(`Conversor no ar: http://localhost:${PORT}`);
});
